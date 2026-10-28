class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    // DFS approach
    canFinish(numCourses, prerequisites) {
        const preMap = Array.from({length: numCourses}, () => []);
        for(const [crs, pre] of prerequisites) {
            preMap[crs].push(pre);
        }

        const path = new Set();
        function dfs(crs) {
            if(path.has(crs)) return false;
            if(!preMap[crs].length) return true;

            path.add(crs);
            for(const pre of preMap[crs]) {
                if(!dfs(pre)) return false;
            }
            path.delete(crs);
            preMap[crs] = [];
            return true;
        }


        for(let i = 0; i < numCourses; i++) {
            if(!dfs(i)) return false;
        }
        return true;
    }
}

class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const preMap = new Map();
        for(let i = 0; i < numCourses; i++) {
            preMap.set(i, []);
        }
        for(const [crs, pre] of prerequisites) {
            preMap.get(crs).push(pre);
        }

        function dfs(crs, visited){
            if(visited.has(crs)) {
                return false;
            }
            if(preMap.get(crs).length === 0) {
                return true;
            }
            const prereqs = preMap.get(crs);
            visited.add(crs);
            for(const pre of prereqs) {
                if(!dfs(pre, visited)) {
                    return false;
                }
            }
            visited.delete(crs);
            preMap.set(crs, []);
            return true;

        }

        for(let i = 0; i < numCourses; i++) {
            if(!dfs(i, new Set())) {
                return false;
            }
        }
        return true;
    }
}

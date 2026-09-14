class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        const preMap = new Map();
        const result = [];
        const completed = new Set();
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
            if(completed.has(crs)) {
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
            completed.add(crs);
            result.push(crs);
            return true;

        }

        for(let i = 0; i < numCourses; i++) {
            if(!dfs(i, new Set())) {
                return [];
            }
        }
        return result;
    }
}

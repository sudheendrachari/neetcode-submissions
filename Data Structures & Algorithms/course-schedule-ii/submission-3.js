class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        const UNVISITED = 0,
            VISITING = 1,
            COMPLETED = 2;
        const status = new Uint8Array(numCourses);
        const preMap = Array.from({ length: numCourses }, () => []);
        const order = [];
        for (const [crs, pre] of prerequisites) {
            preMap[crs].push(pre);
        }

        function dfs(crs) {
            if (status[crs] === VISITING) return false;
            if (status[crs] === COMPLETED) return true;

            status[crs] = VISITING;

            for (const pre of preMap[crs]) {
                if (!dfs(pre)) return false;
            }
            status[crs] = COMPLETED;
            order.push(crs);
            return true;
        }

        for (let i = 0; i < numCourses; i++) {
            if (!dfs(i)) return [];
        }
        return order.length === numCourses ?  order : [];
    }
}

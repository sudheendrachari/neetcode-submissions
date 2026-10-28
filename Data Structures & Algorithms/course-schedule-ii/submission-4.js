class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    // 3-Color DFS
    // findOrder(numCourses, prerequisites) {
    //     const UNVISITED = 0,
    //         VISITING = 1,
    //         COMPLETED = 2;
    //     const status = new Uint8Array(numCourses);
    //     const preMap = Array.from({ length: numCourses }, () => []);
    //     const order = [];
    //     for (const [crs, pre] of prerequisites) {
    //         preMap[crs].push(pre);
    //     }

    //     function dfs(crs) {
    //         if (status[crs] === VISITING) return false;
    //         if (status[crs] === COMPLETED) return true;

    //         status[crs] = VISITING;

    //         for (const pre of preMap[crs]) {
    //             if (!dfs(pre)) return false;
    //         }
    //         status[crs] = COMPLETED;
    //         order.push(crs);
    //         return true;
    //     }

    //     for (let i = 0; i < numCourses; i++) {
    //         if (!dfs(i)) return [];
    //     }
    //     return order;
    // }

    // Kahn algorithm - in degree based
    findOrder(numCourses, prerequisites) {
        const indegree = new Uint8Array(numCourses);
        const preReq = Array.from({ length: numCourses }, () => []);
        for (const [crs, pre] of prerequisites) {
            preReq[pre].push(crs);
            indegree[crs]++;
        }
        const q = [];
        for (let i = 0; i < numCourses; i++) {
            if (!indegree[i]) q.push(i);
        }
        let head = 0;
        const completed = [];
        while (head < q.length) {
            const pre = q[head];
            completed.push(pre);
            for (const crs of preReq[pre]) {
                indegree[crs]--;
                if (!indegree[crs]) q.push(crs);
            }
            head++;
        }
        return completed.length === numCourses ? completed : [];
    }
}

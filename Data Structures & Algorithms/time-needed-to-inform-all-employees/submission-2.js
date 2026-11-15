class Solution {
    /**
     * @param {number} n
     * @param {number[]} manager
     * @param {number[]} informTime
     * @param {number} headID
     * @return {number}
     */
    numOfMinutes(n, headID, manager, informTime) {
        const adjList = Array.from({length: n}, () => []);
        for (let e = 0; e < n; e++) {
            const m = manager[e];
            if(m === -1) continue;
            adjList[m].push(e);
        }

        let maxTime = 0;
        const q = [];
        let head = 0;
        q.push([headID, 0]);
        while (head < q.length) {
            const [empId, time] = q[head++];
            const reports = adjList[empId];
            if (!reports || reports.length === 0) {
                maxTime = Math.max(maxTime, time);
                continue;
            }

            for (const rid of reports) {
                q.push([rid, time + informTime[empId]]);
            }
        }

        return maxTime;
    }
}

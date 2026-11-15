class Solution {
    numOfMinutes(n, headID, manager, informTime) {
        const adjList = new Array(n); // Sparse: 0 sub-arrays allocated upfront
        for (let e = 0; e < n; e++) {
            const m = manager[e];
            if (m === -1) continue;
            if (!adjList[m]) adjList[m] = [];
            adjList[m].push(e);
        }

        let maxTime = 0;
        const stack = [headID]; // Store just the ID (number), not [empId, time]

        while (stack.length > 0) {
            const empId = stack.pop();
            const reports = adjList[empId];

            if (!reports) {
                maxTime = Math.max(maxTime, informTime[empId]);
                continue;
            }

            const baseTime = informTime[empId];
            for (const rid of reports) {
                informTime[rid] += baseTime; // Accumulate in-place
                stack.push(rid);
            }
        }

        return maxTime;
    }
}

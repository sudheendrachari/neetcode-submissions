class Solution {
    numOfMinutes(n, headID, manager, informTime) {
        let maxTime = 0;
        const path = [];

        for (let i = 0; i < n; i++) {
            let curr = i;
            // Walk up until we hit the head or an already-cached node
            while (manager[curr] !== -1) {
                path.push(curr);
                curr = manager[curr];
            }

            // Propagate cumulative informTime back down the path and mark as cached (-1)
            let time = informTime[curr];
            while (path.length > 0) {
                const node = path.pop();
                time += informTime[node];
                informTime[node] = time;
                manager[node] = -1; // Cached! Future walks stop immediately here
            }

            if (time > maxTime) maxTime = time;
        }

        return maxTime;
    }
}
class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    // [[1,100],[11,22],[1,11],[2,12]]
    // [[1,11], [1,100], [2,12], [11,22]]
    eraseOverlapIntervals(intervals) {
        // const sorted = intervals.sort((a, b) => a[0] - b[0]);
        const sorted = intervals.sort((a, b) => {
            if (a[0] === b[0]) {
                return a[1] - b[1]; // Tie-breaker: sort by end time
            }
            return a[0] - b[0]; // Primary: sort by start time
        });
        let prev = sorted[0];
        let count = 0;
        for (let i = 1; i < sorted.length; i++) {
            const cur = sorted[i];
            const [prevStart, prevEnd] = prev;
            const [curStart, curEnd] = cur;
            if (prevEnd <= curStart) {
                prev = cur;
            } else {
                count++;
                prev = (prevEnd > curEnd) ? cur : prev;
            }
        }
        return count;
    }
}

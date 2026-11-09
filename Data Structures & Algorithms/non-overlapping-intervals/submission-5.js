class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    // [[1,100],[11,22],[1,11],[2,12]]
    // [[1,11], [1,100], [2,12], [11,22]]
    eraseOverlapIntervals(intervals) {
        intervals.sort((a,b) => a[0] - b[0]);
        let remove = 0;
        let prev = intervals[0];
        for(let i = 1; i < intervals.length; i++) {
            const cur = intervals[i];
            if(cur[0] < prev[1]) {
                remove++;
                prev = prev[1] > cur[1] ? cur : prev ;
            } else {
                prev = cur;
            }
        }
        return remove;
    }
}

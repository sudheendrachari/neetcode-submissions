class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        intervals = intervals.sort((a,b) => a[0] - b[0]);
        const result = [intervals[0]];
        for(const interval of intervals) {
            let prevStart = result[result.length - 1][0];
            let prevEnd = result[result.length - 1][1];
            let curStart = interval[0];
            let curEnd = interval[1];
            if(curStart <= prevEnd) {
                result[result.length - 1] = [
                    prevStart,
                    Math.max(prevEnd, curEnd)
                ];
            } else {
                result.push(interval);
            }
        }
        return result;
    }
}

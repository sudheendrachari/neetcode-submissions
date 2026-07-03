class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     * 
     * 
     * n = [5,6]
     * 
     * [1,2]
     * 
     * [3,4]
     * 
     * 
     * 
     * [8,9]
     * 
     * [10,11]
     * 
     */
    insert(intervals, newInterval) {
        let newInt = newInterval;
        const res = []
        for(let i = 0; i < intervals.length; i++) {
            const [start, end] = newInt;
            const [curStart, curEnd] = intervals[i];
            if(end < curStart) {
                res.push(newInt);
                for(let j = i; j < intervals.length; j++) {
                    res.push(intervals[j]);
                }
                return res;
            } else if(start > curEnd) {
                res.push(intervals[i]);
            } else {
                newInt = [Math.min(start, curStart), Math.max(end, curEnd)];
            }
        }
        res.push(newInt);
        return res;
    }
}

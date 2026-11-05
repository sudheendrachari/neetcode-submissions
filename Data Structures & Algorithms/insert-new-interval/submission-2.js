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
        const result = [];
        let [newStart, newEnd] = newInterval; //[6, 7]
        let merged = false;
        for(let i = 0; i < intervals.length; i++) {
            if(merged) {
                result.push(intervals[i]);
                continue;
            }

            const [curStart, curEnd] = intervals[i]; // [1,2]
            if(newEnd < curStart) { // new to left
                result.push([newStart, newEnd]);
                result.push(intervals[i]);
                merged = true;
            } else  if(curEnd < newStart) { // new to right
                result.push(intervals[i]);
            } else { //overlap
                newStart = Math.min(newStart, curStart);
                newEnd = Math.max(newEnd, curEnd);
            }

        }
        if(!merged) result.push([newStart, newEnd]);
        return result;
    }
}

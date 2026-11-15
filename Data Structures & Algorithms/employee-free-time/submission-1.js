/**
 * // Definition for an Interval.
 * function Interval(start, end) {
 *    this.start = start;
 *    this.end = end;
 * };
 */
// Just sort
class Solution {
    /**
     * @param {Interval[][]} schedule
     * @return {Interval[]}
     */
    employeeFreeTime(schedule) {
        const intervals = schedule.flat();
        intervals.sort((a, b) => a.start - b.start);
        let prevEnd = intervals[0].end;
        const res = [];
        for(let i = 0; i < intervals.length; i++) {
            const {start, end} = intervals[i];
            if(prevEnd < start) {
                res.push(new Interval(prevEnd, start));
            }
            prevEnd = Math.max(prevEnd, end);
        }
        return res;
    }
}

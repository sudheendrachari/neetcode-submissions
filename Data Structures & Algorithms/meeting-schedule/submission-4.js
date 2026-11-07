/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        const sorted = intervals.toSorted((a, b) => a.start - b.start);
        for(let i = 1; i < intervals.length; i++) {
            if(sorted[i-1].end > sorted[i].start) return false;
        }
        return true;
    }
}

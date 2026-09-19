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
        const sorted = intervals.sort((a,b) => a.start - b.start);
        for(let i = 1; i < sorted.length; i++) {
            const cur = sorted[i];
            const prev = sorted[i-1];
            if(prev.end > cur.start) {
                return false;
            }
        }
        return true;
    }
}

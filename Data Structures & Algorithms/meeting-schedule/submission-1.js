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
        let prev = sorted[0];
        for(let i = 1; i < sorted.length; i++) {
            const cur = sorted[i];
            if(prev.end > cur.start) {
                return false;
            }
            prev = sorted[i];
        }
        return true;
    }
}

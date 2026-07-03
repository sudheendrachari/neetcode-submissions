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
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        const start = intervals.map(x => x.start).sort((a,b) => a-b);
        const end = intervals.map(x => x.end).sort((a,b) => a-b);
        let cur = 0, max = 0;
        let i = 0, j = 0;
        while(i < intervals.length){
            if(start[i] < end[j]) {
                cur++;
                i++;
            } else {
                j++;
                cur--;
            }
            max = Math.max(max, cur)
        }
        return max;
    }
}

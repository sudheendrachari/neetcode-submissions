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
        const entries = {};
        for(const {start, end} of intervals) {
            entries[start] = (entries[start] || 0) + 1;
            entries[end] = (entries[end] || 0) - 1;
        }
        let cur = 0, max = 0;
        const keys = Object.keys(entries).sort((a,b) => a-b);
        for(const key of keys) {
            cur = cur + entries[key];
            max = Math.max(max, cur);
        }
        return max;
    }
}

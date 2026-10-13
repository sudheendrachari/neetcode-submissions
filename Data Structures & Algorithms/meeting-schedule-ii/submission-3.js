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
        const events = new Map();
        for(let i = 0; i <intervals.length; i++) {
            const interval = intervals[i];
            const start = interval.start, end = interval.end;
            events.set(start, (events.get(start) || 0) + 1);
            events.set(end, (events.get(end) || 0) - 1);
        }

        const timeline = Array.from(events.keys()).sort((a,b) => a-b);
        let liveMeetings = 0, meetingRooms = 0;
        for(const time of timeline) {
            liveMeetings += events.get(time);
            meetingRooms = Math.max(meetingRooms, liveMeetings);
        }
        return meetingRooms;
    }
}

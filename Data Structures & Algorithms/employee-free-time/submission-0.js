/**
 * // Definition for an Interval.
 * function Interval(start, end) {
 *    this.start = start;
 *    this.end = end;
 * };
 */

class Solution {
    /**
     * @param {Interval[][]} schedule
     * @return {Interval[]}
     */
    employeeFreeTime(schedule) {
        const minHeap = new MinPriorityQueue(([empIdx, intIdx]) => schedule[empIdx][intIdx].start);

        //seed the heap with first interval for each employee
        for (let i = 0; i < schedule.length; i++) {
            minHeap.enqueue([i, 0]);
        }
        const [firstEmpIdx, firstIntIdx] = minHeap.front();
        let prevEnd = schedule[firstEmpIdx][firstIntIdx].end;
        const res = [];
        while (!minHeap.isEmpty()) {
            const [curEmpIdx, curIntIdx] = minHeap.dequeue();
            const interval = schedule[curEmpIdx][curIntIdx];
            // no empl is working between prev end and this cur start
            if (prevEnd < interval.start) {
                res.push(new Interval(prevEnd, interval.start));
            }

            prevEnd = Math.max(prevEnd, interval.end)

            if (curIntIdx + 1 < schedule[curEmpIdx].length) {
                minHeap.enqueue([curEmpIdx, curIntIdx + 1]);
            }
        }
        return res;
    }
}

class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        const sIntervals = intervals.sort((a, b) => a[0]-b[0]);
        const result = [sIntervals[0]];
        for(let i = 1; i < sIntervals.length; i++) {
            const current = sIntervals[i];
            const prev = result[result.length-1];
            if(current[0] <= prev[1]) {
                result[result.length-1] = [
                    prev[0],
                    Math.max(current[1], prev[1])
                ];
            } else {
                result.push(current)
            }
        }
        return result;
    }
}

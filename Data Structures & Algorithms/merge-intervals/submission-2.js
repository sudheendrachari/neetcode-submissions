class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        const sorted = intervals.sort((a,b) => a[0] - b[0]);
        const res = [];
        let prev = sorted[0];
        for(let i = 1; i < sorted.length; i++) {
            const cur = sorted[i];
            let [prevStart, prevEnd] = prev;
            let [curStart, curEnd] = cur;
            if(prevEnd < curStart) {
                res.push(prev);
                prev = cur;
            } else {
                // prev = [Math.min(prevStart, curStart), Math.max(prevEnd, curEnd)];
                prev[0] = Math.min(prevStart, curStart);
                prev[1] = Math.max(prevEnd, curEnd);
            }

        }
        if(prev) res.push(prev);
        return res;
    }
}

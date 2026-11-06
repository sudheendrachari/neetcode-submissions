class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(input) {
        const intervals = input.toSorted((a, b) => a[0]-b[0]);
        const result = [];
        let [prevStart, prevEnd] = intervals[0];
        for(let i = 1; i < intervals.length; i++) {
            const [curStart, curEnd] = intervals[i];
            if(prevEnd >= curStart) {
                // overlap
                prevEnd = Math.max(prevEnd, curEnd);
            } else {
                result.push([prevStart, prevEnd]);
                [prevStart, prevEnd] = [curStart, curEnd];
            }
        }
        result.push([prevStart, prevEnd]);
        return result;
    }
}

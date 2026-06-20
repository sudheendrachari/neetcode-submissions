class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        let lastButOne = 0, last = 0;
        for(const num of nums) {
            const best = Math.max( num + lastButOne,  last);
            lastButOne = last;
            last = best;
        }
        return last;
    }
}

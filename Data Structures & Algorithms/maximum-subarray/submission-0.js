class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let max = -Infinity;
        let cur = 0;
        for(const n of nums) {
            cur = Math.max(cur, 0);
            cur += n;
            max = Math.max(max, cur)
        }
        return max;
    }
}

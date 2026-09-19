class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let max = -Infinity;
        let current = 0;
        for(const num of nums) {
            if(current < 0) current = 0;
            current += num;
            max = Math.max(max, current);
        }
        return max;
    }
}

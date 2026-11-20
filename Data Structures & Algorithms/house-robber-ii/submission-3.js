class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        function helper(arr) {
            let curMinusTwo = 0,
                curMinusOne = 0,
                cur = 0;
            for (const n of arr) {
                cur = Math.max(n + curMinusTwo, curMinusOne);
                curMinusTwo = curMinusOne;
                curMinusOne = cur;
            }
            return cur;
        }
        if(nums.length === 1) return nums[0];
        return Math.max(helper(nums.slice(0, nums.length - 1)), helper(nums.slice(1)));
    }
}

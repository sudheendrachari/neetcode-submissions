class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        let curMinusOne = 0, curMinusTwo = 0;
        let cur = 0;
        for(let i = 0; i < nums.length; i++) {
            cur = Math.max(
                nums[i] + curMinusTwo,
                curMinusOne
            );
            curMinusTwo = curMinusOne;
            curMinusOne = cur;
        }
        return cur;
    }
}

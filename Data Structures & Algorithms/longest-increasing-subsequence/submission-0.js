class Solution {
    /**
     * Simple solution:
     * https://www.youtube.com/watch?v=Xq3hlMvhrkE
     */
    lengthOfLIS(nums) {
        const memo = new Array(nums.length).fill(1);
        for(let i = 0; i < nums.length; i++) {
            for(let j = 0; j < i; j++) {
                if(nums[i] > nums[j]) {
                    memo[i] = Math.max(memo[i], memo[j] + 1);
                }
            }
        }
        return Math.max(...memo);
    }
}

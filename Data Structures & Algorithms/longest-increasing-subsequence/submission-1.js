class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        const LIS = new Array(nums.length).fill(1); // =[1,1,1,2,1,2,1]
        for(let i = nums.length - 1; i >=0; i--){ // i = 4
            for(let j = i; j < nums.length; j++) {
                if(nums[i] < nums[j]) {
                    LIS[i] = Math.max(LIS[i], 1 + LIS[j]);
                }
            }
        }
        return Math.max(...LIS);
    }
}

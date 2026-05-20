class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const lookup = {};
        for (let i = 0; i< nums.length; i++) {
            const val = nums[i];
            if(lookup[target-val] !== undefined) {
                return [lookup[target-val], i];
            }
            lookup[val] = i;
        }
        return [];
    }
}

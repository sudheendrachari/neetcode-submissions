class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const seen = new Map();
        for(let i = 0; i<nums.length; i++) {
            const n = nums[i];
            if(seen.has(target - n)) {
                return [i, seen.get(target-n)]
            }
            seen.set(n, i);
        }
    }
}

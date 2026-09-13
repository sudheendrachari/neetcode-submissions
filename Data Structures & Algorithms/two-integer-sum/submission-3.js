class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const seen = new Map();
        for(let i = 0; i<nums.length; i++) {
            const current = nums[i];
            const req = target - current;
            if(seen.has(req)) {
                return [seen.get(req), i];
            }
            seen.set(current, i);
        }
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const m = new Map();
        for(const [i, n] of nums.entries()) {
            if(m.has(n)) {
                return [m.get(n), i];
            }
            m.set(target-n, i);
        }
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const seen = new Set();
        for(let i= 0; i < nums.length; i++) {
            const el = nums[i];
            if(seen.has(el)) {
                return true;
            } else {
                seen.add(el);
            }
        }
        return false;
    }
}

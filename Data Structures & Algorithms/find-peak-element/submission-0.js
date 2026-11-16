class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findPeakElement(nums) {
        let l = 0,
            r = nums.length - 1;
        while (l < r) {
            let m = Math.floor((l + r) / 2);
            if (nums[m] < nums[m + 1]) {
                l = m + 1;
            } else {
                r = m;
            }
        }
        return l;
    }
}

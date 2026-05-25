class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let l = 0, r = nums.length-1;
        while(l<r) {
            let m = Math.floor((l+r)/2);
            const mid = nums[m], right = nums[r];
            if( mid < right) {
                //remove right half
                r = m;
            } else {
                // remove left half
                l = m+1;
            }
        }
        return nums[l]
    }
}

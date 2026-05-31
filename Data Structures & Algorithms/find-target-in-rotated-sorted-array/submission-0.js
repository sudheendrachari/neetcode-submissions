class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0, r = nums.length -1;
        while(l<=r) {
            let m = Math.floor((l+r)/2);
            const left = nums[l], right = nums[r], mid = nums[m];
            if(mid === target) return m;
            // is left half sorted
            if(left <= mid) {
                if( (left <= target) && (target < mid)){
                    // target is in left half
                    r = m-1;
                } else {
                    // target is in right half
                    l = m+1;
                }
            } else { // right half sorted
                if((mid < target) && (target <= right)){
                    // target is in right half
                    l = m+1;
                } else {
                    r = m-1;
                }
            }
        }
        return -1;
    }
}

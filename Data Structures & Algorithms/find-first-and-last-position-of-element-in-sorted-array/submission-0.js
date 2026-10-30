class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     * 1 8 8 8 10
     *       L  R    
     */
    searchRange(nums, target) {
        function binarySearch(findLeft) {
            let l = 0, r = nums.length - 1;
            let i = -1;
            while (l <= r) {
                let m = l + Math.floor((r-l)/2);
                if(nums[m] < target) {
                    l = m + 1; 
                } else if (target < nums[m]) {
                    r = m - 1;
                } else {
                    i = m;
                    if(findLeft) {
                        r = m - 1;
                    } else {
                        l = m + 1;
                    }
                }
            }
            return i;
        }
        const left = binarySearch(true), right = binarySearch(false);
        if(left === -1) return [-1, -1];
        return [left, right];
    }
}

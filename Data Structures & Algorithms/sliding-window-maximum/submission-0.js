class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    // maxSlidingWindow(nums, k) {
    //     const res = [];
    //     let l = 0;
    //     let max = -Infinity, min = Infinity;
    //     for(let r = 0; r < l+k; r++) {
    //         max = Math.max(max, nums[r]);
    //         min = Math.min(min, nums[i]);
    //     }
    //     for(let r = l+k; r < nums.length; r++) {
    //         const prev = nums[l];
    //         l++;
    //         const cur = nums[r];
    //         if(prev === max) {
    //             max = Math.max(min, cur);
    //         } else if(prev === min) {
    //             max = Math.max(max, cur);
    //         }

    //     }
    //     return res;
    // }
    maxSlidingWindow(nums, k) {
        const res = [];
        let l = 0;
        let max = Math.max(...nums.slice(l, l+k));
        res.push(max);
        for(let r = l+k; r < nums.length; r++) {
            l++;
            max = Math.max(...nums.slice(l, r+1));
            res.push(max);
        }
        return res;
    }
}

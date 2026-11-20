class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let res = Math.max(...nums);
        let curMax = 1, curMin = 1;
        for(const n of nums) {
            if(n === 0) {
                curMax = 1;
                curMin = 1;
                continue;
            }
            const a = n * curMax, b = n * curMin;
            curMax = Math.max(a, b, n);
            curMin = Math.min(a, b, n);
            res = Math.max(res, curMax);
        }
        return res;
    }
}

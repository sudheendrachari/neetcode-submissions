class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const pre = [1];
        let prod = 1;
        for(let i = 1; i<nums.length; i++) {
            prod = prod * nums[i-1];
            pre.push(prod);
        }
        const suf = [1];
        prod = 1;
        for(let i = nums.length-1; i >0; i--) {
            prod = prod * nums[i];
            suf.unshift(prod);
        }
        const res = [];
        for(let i = 0; i<nums.length; i++) {
            res.push(pre[i]*suf[i]);
        }
        return res;
    }
}

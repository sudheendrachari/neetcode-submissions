class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let res = -Infinity;
        let pre = 1, suf = 1;
        const len = nums.length;
        for(let i = 0; i < len; i++) {
            const pIndex = i, sIndex = len - 1 - i;
            if(pre === 0) pre = 1;
            if(suf === 0) suf = 1;
            pre = pre * nums[pIndex];
            suf = suf * nums[sIndex];
            res = Math.max(res, Math.max(pre, suf));
        }
        // this is just to avoid res being -0 in js when 0 gts multiplied by -ve number
        return res  + 0; 
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prod = 1;
        const zeroIndex = [];
        for (let i = 0; i< nums.length; i++) {
            const n = nums[i];
            if(n) {
                prod*=n;
            } else {
                zeroIndex.push(i);
            }
        }
        const res = [];
        if(zeroIndex.length > 1) {
            return new Array(nums.length).fill(0);
        }
        if(zeroIndex.length) {
            const zIndex = zeroIndex[0];
            for (let i = 0; i< nums.length; i++) {
                const n = nums[i];
                if(i === zIndex) {
                    res.push(prod);
                } else {
                    res.push(0);
                }
            }
            return res;          
        }
        else {
            for (const n of nums) {
                res.push(prod/n);
            }
        }
        return res;
    }
}

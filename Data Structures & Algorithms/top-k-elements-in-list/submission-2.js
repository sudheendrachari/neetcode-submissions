class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const f = {};
        for (const n of nums) {
            if(f[n] == undefined) {
                f[n] = 0;
            }
            f[n]++;
        }
        const fArr = new Array(nums.length + 1).fill(false);
        for(const key in f) {
            const val = f[key];
            if(!fArr[val]) {
                fArr[val] = [];
            }
            fArr[val].push(key);
        }
        let res = [];
        for(let i = fArr.length-1; i >=0; i--) {
            const v = fArr[i];
            if(Array.isArray(v)) {
                if(k > 0) {
                    res = res.concat(v);
                    k = k-v.length;
                }
            }
        }
        return res;
    }
}

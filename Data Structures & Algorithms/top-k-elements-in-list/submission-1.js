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
        const fArr = Object.keys(f).map(k => [k, f[k]]);
        fArr.sort((a,b) => b[1] - a[1]);
        return fArr.slice(0, k).map(a=>a[0]);
    }
}

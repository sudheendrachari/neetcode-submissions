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
        fArr.sort((a,b) => a[1] - b[1]);
        return fArr.reverse().slice(0, k).map(a=>a[0]);
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const m = new Map();
        for(const num of nums) {
            m.set(num, (m.get(num) || 0) + 1)
        }
        let mArr = [...m.entries()];
        mArr = mArr.sort((a,b) => b[1] - a[1]).map(el => el[0]);
        return mArr.slice(0,k)
    }
}

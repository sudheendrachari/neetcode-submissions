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
        // let mArr = [...m.entries()];
        // mArr = mArr.sort((a,b) => b[1] - a[1]).map(el => el[0]);
        // return mArr.slice(0,k)
        // lets use bucket method, where array index represent frequency
        const res = Array.from(
            {
                length: nums.length + 1
            },
            () => []
        );
        for(const [num,freq] of m.entries()) {
            res[freq].push(num);
        }
        const outArr = [];
        for(let i = res.length-1; i >=0 && outArr.length < k; i--) {
            if(res[i].length > 0) {
                outArr.push(...res[i]);
            }
        }
        return outArr;
    }
}

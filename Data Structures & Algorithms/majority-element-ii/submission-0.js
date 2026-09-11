class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        if(!nums.length) return [];
        const freq = new Map();
        for (const n of nums) {
            const current = freq.get(n) || 0;
            freq.set(n, current + 1);
        }
        const req = Math.floor(nums.length/3);
        const ret = [];
        for(const [key, val] of freq) {
            if(val > req) ret.push(key)
        }
        return ret.sort((a,b) => a-b);
    }
}

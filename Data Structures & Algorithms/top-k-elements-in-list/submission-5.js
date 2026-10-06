class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k){
        const m = new Map();
        for(const n of nums) {
            m.set(n, (m.get(n) || 0) + 1);
        }
        const arr = Array.from({length: nums.length + 1}, () => []);
        for(const [key, val] of m.entries()) {
            arr[val].push(key);
        }

        const result = [];
        for(let i = arr.length - 1 ; i >=0; i--) {
            const list = arr[i];
            for(const elem of list) {
                if(result.length === k) return result;
                result.push(elem);
            }
        }
        return result;
    }
}

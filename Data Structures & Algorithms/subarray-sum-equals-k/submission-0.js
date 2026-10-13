class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        const prefixMap = new Map([[0,1]]);
        let res = 0;
        let sum = 0;
        for(const n of nums) {
            sum+= n;
            const req = sum - k;
            if(prefixMap.has(req)) {
                res += prefixMap.get(req);
            } 
            prefixMap.set(sum, (prefixMap.get(sum) || 0)+1);
        }
        return res;
    }
}

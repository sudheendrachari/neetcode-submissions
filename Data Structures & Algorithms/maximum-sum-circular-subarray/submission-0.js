class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubarraySumCircular(nums) {
        let curMax = 0, globalMax = -Infinity;
        let curMin = 0, globalMin = Infinity;
        let total = 0;
        for(const n of nums) {
            total += n
            curMax = Math.max(n, n + curMax);
            curMin = Math.min(n, n + curMin);
            globalMax = Math.max(globalMax, curMax);
            globalMin = Math.min(globalMin, curMin);
        }
        if(globalMax < 0) return globalMax;
        return Math.max(globalMax, total - globalMin);
    }
}

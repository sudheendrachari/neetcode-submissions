class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        const memo = new Map();
        function dp(i){
            if(i >= cost.length) return 0;
            if(memo.has(i)) return memo.get(i);
            const res = cost[i] + Math.min(dp(i+1), dp(i+2));            
            memo.set(i, res);
            return res;
        }
        return Math.min(dp(0), dp(1))
    }
}

class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let lowest = Infinity;
        let max = 0;
        for(const p of prices) {
            lowest = Math.min(lowest, p);
            max = Math.max(max, p - lowest);
        }
        return max;
    }
}

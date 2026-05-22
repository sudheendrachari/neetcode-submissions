class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let cheap = Infinity;
        let profit = 0;
        for (let i = 0; i < prices.length; i++) {
            cheap = Math.min(cheap, prices[i]);
            profit = Math.max(profit, (prices[i] - cheap));
        }
        return profit;
    }
}

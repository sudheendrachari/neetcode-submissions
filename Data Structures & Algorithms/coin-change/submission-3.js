class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        const dp = new Array(amount+1).fill(amount + 1);
        dp[0] = 0;
        for(let i = 0; i <= amount; i++) {
            let count = dp[i];
            for(const c of coins) {
                if((i - c) >= 0) {
                    count = Math.min(count, 1 + dp[i-c]);
                }
            }
            dp[i] = count;
        }
        return dp[amount] === amount + 1 ? -1 : dp[amount];
    }
}

class Solution {
    /**
     *
     * help
     * i = 0
     * len = 4
     * abc
     * len = 3
     * lmno
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(str, wordDict) {
        const dp = new Uint8Array(str.length + 1);
        dp[str.length] = 1;
        for (let i = str.length - 1; i >= 0; i--) {
            for (const word of wordDict) {
                if (i + word.length > str.length) continue;
                if (str.substring(i, i + word.length) === word) {
                    dp[i] = dp[i + word.length];
                }
                if(dp[i]) {
                    break;
                }
            }
        }

        return Boolean(dp[0]);
    }
}

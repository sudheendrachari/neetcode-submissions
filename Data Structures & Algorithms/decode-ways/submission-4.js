class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        function isValidTwoDigit(i) {
            const num = Number(s.slice(i, i+2));
            return (num >= 10) && (num <= 26);
        }
        const dp = new Array(s.length + 1).fill(0);
        dp[s.length] = 1;
        let i = s.length - 1;
        while (i >=0) {
            if(s[i] === '0') {
                dp[i] = 0
            } else {
                dp[i] = dp[i+1];
            }
            if(((i+1) < s.length) && isValidTwoDigit(i)) {
                dp[i] += dp[i+2];
            }
            i--;
        }
        return dp[0];
    }
}

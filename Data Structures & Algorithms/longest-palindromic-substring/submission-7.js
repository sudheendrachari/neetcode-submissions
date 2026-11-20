class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    // DP solution
    longestPalindrome(s) {
        const n = s.length;
        const dp = Array.from({ length: n }, () => new Array(n).fill(false));
        let start = 0,
            len = 0;
        for (let i = n - 1; i >= 0; i--) {
            for (let j = i; j < n; j++) {
                if (s[i] === s[j] && (j - i <= 2 || dp[i + 1][j - 1])) {
                    dp[i][j] = true;
                    if (j - i + 1 > len) {
                        start = i;
                        len = j - i + 1;
                    }
                }
            }
        }
        return s.slice(start, start+len);
    }
}

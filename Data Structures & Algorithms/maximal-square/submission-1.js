class Solution {
    /**
     * @param {character[][]} matrix
     * @return {number}
     */
    maximalSquare(matrix) {
        const rLen = matrix.length,
            cLen = matrix[0].length;
        const dp = Array.from({ length: rLen }, () => new Array(cLen).fill(0));
        let maxArea = 0;
        for(let r = 0; r < rLen; r++) {
            for(let c = 0; c < cLen; c++) {
                if(matrix[r][c] !== '1') continue;
                if(r === 0 || c === 0) {
                    dp[r][c] = 1
                } else {
                    dp[r][c] = 1 + Math.min(
                        dp[r-1][c],
                        dp[r][c-1],
                        dp[r-1][c-1]
                    );
                }
                maxArea = Math.max(maxArea, (dp[r][c] * dp[r][c]))
            }
        }
        return maxArea;
    }
}

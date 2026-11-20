class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        let curMinusTwo = 1,
            curMinusOne = 1;
        if (n <= 1) return 1;
        let cur = 0;
        let i = 2;
        while (i <= n) {
            cur = curMinusOne + curMinusTwo;
            curMinusTwo = curMinusOne;
            curMinusOne = cur;
            i++;
        }
        return cur;
    }
}

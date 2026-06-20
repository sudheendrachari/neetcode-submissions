class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        const res = [0];

        function dp(x){
            if(x <= 1) return 1;
            if(res[x]) return res[x];
            const val =  dp(x-1) + dp(x-2);
            res[x] = val;
            return val;
        }
        return dp(n);
    }
}

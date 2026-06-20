class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    // climbStairs(n) {
    //     const res = [0];

    //     function dp(x){
    //         if(x <= 1) return 1;
    //         if(res[x]) return res[x];
    //         const val =  dp(x-1) + dp(x-2);
    //         res[x] = val;
    //         return val;
    //     }
    //     return dp(n);
    // }

    /**
     * Bottom up approach
     */
    climbStairs(n) {
        let a = 1,
        b = 1,
        c = 0,
        i = 2;
        if(n == 1) return n;
        while (i <= n) {
            c = a+b;
            a = b;
            b = c;
            i++
        }
        return c
    }
}

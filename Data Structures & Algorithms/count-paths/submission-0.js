class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    // uniquePaths(m, n) {
    //     const cache = new Map();

    //     function dp(x,y) {
    //         const key = `${x}-${y}`;
    //         if(cache.has(key)) return cache.get(key);
    //         if(x < 0 || y < 0) return 0;
    //         if(x === 0 && y === 0) return 1;
    //         const res = dp(x,y-1) + dp(x-1,y);
    //         cache.set(key, res);
    //         return res;
    //     }

    //     return dp(m-1,n-1);
    // }
    uniquePaths(m, n) {
        const cache = new Map();

        function dp(x,y) {
            const key = `${x}-${y}`;
            if(cache.has(key)) return cache.get(key);
            if(x === m || y === n) return 0;
            if(x === m-1 && y === n-1) return 1;
            const res = dp(x,y+1) + dp(x+1,y);
            cache.set(key, res);
            return res;
        }

        return dp(0,0);
    }
}

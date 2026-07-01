class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    // Recursive: This is going from (m-1,n-1) to (0,0) 
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
    
    // Recursive: This is going from (0,0) to (m-1,n-1)
    // uniquePaths(m, n) {
    //     const cache = new Map();

    //     function dp(x,y) {
    //         const key = `${x}-${y}`;
    //         if(cache.has(key)) return cache.get(key);
    //         if(x === m || y === n) return 0;
    //         if(x === m-1 && y === n-1) return 1;
    //         const res = dp(x,y+1) + dp(x+1,y);
    //         cache.set(key, res);
    //         return res;
    //     }

    //     return dp(0,0);
    // }

    // True DP , computing row by row
    uniquePaths(m, n) {
        let prevRow = new Array(n).fill(0);
        let curRow;
        for(let i = m-1; i >=0 ; i--){
            curRow = new Array(n).fill(0);
            curRow[n-1] = 1;
            for(let j = n-2; j >=0; j--) {
                curRow[j] = curRow[j+1] + prevRow[j];
            }
            prevRow = curRow;
        }
        return prevRow[0];
    }
}

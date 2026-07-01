class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    // uniquePathsWithObstacles(grid) {
    //     const m = grid.length, n = grid[0].length;
    //     if(grid[m-1][n-1] === 1) return 0;
    //     let prevRow = new Array(n).fill(0);
    //     let curRow;

    //     for(let i = m-1; i >=0; i--) {
    //         curRow = new Array(n).fill(0);
    //         curRow[n-1] = grid[i][n-1] === 1 ? 0 : 1; 
    //         for(let j = n-2; j >=0; j--) {
    //             curRow[j] = (curRow[j+1]) + (prevRow[j]);
    //         }
    //         prevRow = curRow
    //     }
    //     return prevRow[0];
    // }

    // Recursive way, from (m-1, n-1) to (0,0)
    uniquePathsWithObstacles(grid) {
        const m = grid.length, n = grid[0].length;
        if(grid[m-1][n-1] === 1) return 0;
        const cache = new Map();

        function dp(x,y) {
            if(x < 0 || y < 0) return 0;
            if(grid[x][y] === 1) return 0;
            const key = `${x}-${y}`;
            if(cache.has(key)) return cache.get(key);
            if(x === 0 && y === 0) return 1;
            const res = ( dp(x-1, y)) + (dp(x, y-1));
            cache.set(key, res);
            return res;
        }
        return dp(m-1, n-1)
    }
}

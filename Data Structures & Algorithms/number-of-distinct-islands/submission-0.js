class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    numDistinctIslands(grid) {
        const rLen = grid.length, cLen = grid[0].length;
        const distinctShapes = new Set();

        function dfs(r, c, dir, path) {
            if(r < 0 || c < 0 || r >= rLen || c >= cLen) return;
            if(grid[r][c] !== 1) return;
            grid[r][c] = 0;
            path.push(dir);

            dfs(r, c+1, 'R', path);
            dfs(r, c-1, 'L', path);
            dfs(r+1, c, 'D', path);
            dfs(r-1, c, 'U', path);
            path.push('B');
        }


        for(let i = 0; i < rLen; i++) {
            for(let j = 0; j < cLen; j++){
                if(grid[i][j] === 1) {
                    const shape = [];
                    dfs(i, j, 'S', shape);
                    distinctShapes.add(shape.join(''));
                }
            }
        }
        return distinctShapes.size;
    }
}

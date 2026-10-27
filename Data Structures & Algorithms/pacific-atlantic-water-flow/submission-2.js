class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(grid) {
        const rLen = grid.length, cLen = grid[0].length;
        const pacific = new Uint8Array(rLen * cLen), atlantic = new Uint8Array(rLen * cLen);
        const getIndex = (r, c) => ((r*cLen) + c);

        function dfs(r, c, visit, prevHeight) {
            if(r < 0 || c < 0 || r >= rLen || c >= cLen) return;
            const key = getIndex(r, c);
            if(visit[key]) return;
            if(grid[r][c] < prevHeight) return;
            const height = grid[r][c];
            visit[key] = 1;
            dfs(r, c+1, visit, height);
            dfs(r, c-1, visit, height);
            dfs(r+1, c, visit, height);
            dfs(r-1, c, visit, height);
        }


        for(let c = 0; c < cLen; c++) {
            dfs(0, c, pacific, grid[0][c]);
            dfs(rLen - 1, c, atlantic, grid[rLen - 1][c]);
        }

        for(let r = 0; r < rLen; r++) {
            dfs(r, 0, pacific, grid[r][0])
            dfs(r, cLen - 1, atlantic, grid[r][cLen - 1]);
        }
        const result = [];
        for(let r = 0; r < rLen; r++) {
            for(let c = 0; c < cLen; c++) {
                const i = getIndex(r, c);
                if(pacific[i] && atlantic[i]) result.push([r, c])
            }
        }
        return result;
    }
}

class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(grid) {
        const rLen = grid.length,
        cLen = grid[0].length;
        const pac = new Set(), atl = new Set();

        function dfs(r, c, visit, prevHeight) {
            if(r<0 || c<0) return;
            if(r === rLen || c === cLen) return;
            if(visit.has(`${r}-${c}`)) return;
            if(grid[r][c] <  prevHeight) return;
            visit.add(`${r}-${c}`);
            dfs(r+1, c, visit, grid[r][c]);
            dfs(r-1, c, visit, grid[r][c]);
            dfs(r, c+1, visit, grid[r][c]);
            dfs(r, c-1, visit, grid[r][c]);
        }


        for(let i = 0; i < cLen; i++) {
            dfs(0, i, pac, grid[0][i]);
            dfs(rLen-1, i, atl, grid[rLen-1][i]);
        }
        
        for(let i = 0; i < rLen; i++) {
            dfs(i, 0, pac, grid[i][0]);
            dfs(i, cLen-1, atl, grid[i][cLen-1]);
        }
        const both = pac.intersection(atl); // or loop through entire grid to find which elements are in both pac and atl
        const res = [];
        both.forEach(el => {
            const [r,c] = el.split('-');
            res.push([Number(r), Number(c)]);
        });
        return res;
    }
}

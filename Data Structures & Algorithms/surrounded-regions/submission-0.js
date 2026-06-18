class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(grid) {
        const rLen = grid.length,
            cLen = grid[0].length;
        const visit = new Set();

        function dfs(r, c) {
            if (r < 0 || c < 0) return;
            if (r == rLen || c == cLen) return;
            if (grid[r][c] !== "O") return;
            if (visit.has(`${r}-${c}`)) return;
            visit.add(`${r}-${c}`);
            dfs(r, c + 1);
            dfs(r, c - 1);
            dfs(r + 1, c);
            dfs(r - 1, c);
        }

        for (let c = 0; c < cLen; c++) {
            if (grid[0][c] === "O") dfs(0, c);
            if (grid[rLen - 1][c] === "O") dfs(rLen-1, c);
        }
        for (let r = 1; r < rLen - 1; r++) {
            if (grid[r][0] === "O") dfs(r, 0);
            if (grid[r][cLen - 1] === "O") dfs(r, cLen-1);
        }

        for (let r = 0; r < rLen; r++) {
            for (let c = 0; c < cLen; c++) {
                if (grid[r][c] !== "O") continue;
                if (visit.has(`${r}-${c}`)) continue;
                grid[r][c] = "X";
            }
        }
        return grid;
    }
}

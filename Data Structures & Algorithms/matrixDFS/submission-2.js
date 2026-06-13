class Solution {
    /**
     * @param {number[][]} grid
     * @returns {number}
     */
    countPaths(grid) {
        const rLen = grid.length,
            cLen = grid[0].length;
        const visited = new Set();
        function dfs(r, c) {
            if (r < 0 || c < 0) return 0;
            if (r === rLen || c === cLen) return 0;
            if (visited.has(`${r}-${c}`)) return 0;
            if (grid[r][c] === 1) return 0;
            if (r === rLen - 1 && c === cLen - 1) return 1;

            visited.add(`${r}-${c}`);
            let count = 0;
            count += dfs(r, c + 1);
            count += dfs(r, c - 1);
            count += dfs(r + 1, c);
            count += dfs(r - 1, c);
            visited.delete(`${r}-${c}`);
            return count;
        }
        return dfs(0, 0);
    }
}

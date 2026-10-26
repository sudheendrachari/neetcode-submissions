class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */

    numIslands(grid) {
        const rLen = grid.length,
            cLen = grid[0].length;
        let count = 0;

        function getNeibhours(r, c) {
            return [
                [r, c + 1],
                [r, c - 1],
                [r + 1, c],
                [r - 1, c],
            ];
        }

        function bfs(i, j) {
            const q = [];
            let head = 0;
            q.push([i, j]);
            grid[i][j] = "0";
            while (head < q.length) {
                const [r, c] = q[head];
                for (const [nr, nc] of getNeibhours(r, c)) {
                    if (nr < 0 || nc < 0 || nr === rLen || nc === cLen) {
                        continue;
                    }
                    if (grid[nr][nc] !== "1") continue;
                    q.push([nr, nc]);
                    grid[nr][nc] = "0";
                }
                head++;
            }
        }

        for (let i = 0; i < rLen; i++) {
            for (let j = 0; j < cLen; j++) {
                if (grid[i][j] == "1") {
                    bfs(i, j);
                    count++;
                }
            }
        }
        return count;
    }
}

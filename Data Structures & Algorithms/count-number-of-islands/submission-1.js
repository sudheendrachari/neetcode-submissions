class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const visited = new Set();
        let count = 0;
        const rLen = grid.length,
            cLen = grid[0].length;

        function getNeighbours(r, c) {
            return [[r + 1, c],[r - 1, c],[r, c + 1],[r, c - 1]];
        }

        function bfs(r, c) {
            const queue = [[r, c]];
            visited.add(`${r}-${c}`);
            while (queue.length) {
                const [row, col] = queue.shift();
                const neighbours = getNeighbours(row, col);
                for (const n of neighbours) {
                    const [nr, nc] = n;
                    if (nr < 0 || nc < 0) continue;
                    if (nr > rLen - 1 || nc > cLen - 1) continue;
                    if (grid[nr][nc] === "0") continue;
                    if(visited.has(`${nr}-${nc}`)) continue;
                    queue.push([nr, nc]);
                    visited.add(`${nr}-${nc}`);
                }
            }
        }

        for (let i = 0; i < rLen; i++) {
            for (let j = 0; j < cLen; j++) {
                if (grid[i][j] === "1" && !visited.has(`${i}-${j}`)) {
                    bfs(i, j);
                    count++;
                }
            }
        }
        return count;
    }
}

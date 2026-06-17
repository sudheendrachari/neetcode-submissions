class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        let fresh = 0,
            rotten = [],
            visited = new Set();
        const rLen = grid.length,
            cLen = grid[0].length;
        for (let i = 0; i < rLen; i++) {
            for (let j = 0; j < cLen; j++) {
                if (grid[i][j] == 1) {
                    fresh++;
                } else if (grid[i][j] == 2) {
                    rotten.push([i, j]);
                    visited.add(`${i}-${j}`);
                }
            }
        }

        function getNeighbors(r, c) {
            return [
                [r, c + 1],
                [r, c - 1],
                [r - 1, c],
                [r + 1, c],
            ];
        }

        function bfs() {
            let time = 0;
            while (fresh > 0 && rotten.length > 0) {
                const qLen = rotten.length;
                for (let i = 0; i < qLen; i++) {
                    const [r, c] = rotten.shift();
                    const val = grid[r][c];
                    const nei = getNeighbors(r, c);
                    for (const n of nei) {
                        const [nr, nc] = n;
                        if (nr < 0 || nc < 0) continue;
                        if (nr > rLen - 1 || nc > cLen - 1) continue;
                        if (visited.has(`${nr}-${nc}`)) continue;
                        if (grid[nr][nc] === 1) {
                            fresh--;
                            rotten.push([nr, nc]);
                            visited.add(`${nr}-${nc}`);
                        }
                    }
                }
                time++;
            }
            return time;
        }
        const time = bfs();
        return fresh > 0 ? -1 : time;
    }
}

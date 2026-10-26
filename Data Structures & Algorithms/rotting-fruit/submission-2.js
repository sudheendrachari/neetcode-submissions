class Solution {
    orangesRotting(grid) {
        const rLen = grid.length,
            cLen = grid[0].length;
        let minute = 0,
            fresh = 0;
        const rotten = [];
        for (let i = 0; i < rLen; i++) {
            for (let j = 0; j < cLen; j++) {
                if (grid[i][j] === 1) {
                    fresh++;
                } else if (grid[i][j] === 2) {
                    rotten.push([i, j]);
                }
            }
        }
        let head = 0;
        function getNeighbours(r, c) {
            return [
                [r, c + 1],
                [r, c - 1],
                [r + 1, c],
                [r - 1, c],
            ];
        }
        while (head < rotten.length && fresh > 0) {
            const end = rotten.length;
            for (let i = head; i < end; i++) {
                const [r, c] = rotten[i];
                for (const [nr, nc] of getNeighbours(r, c)) {
                    if (nr < 0 || nc < 0 || nr === rLen || nc === cLen) continue;
                    if (grid[nr][nc] !== 1) continue;
                    fresh--;
                    grid[nr][nc] = 2;
                    rotten.push([nr, nc]);
                }
            }
            head = end;
            minute++;
        }
        return fresh > 0 ? -1 : minute;
    }
}

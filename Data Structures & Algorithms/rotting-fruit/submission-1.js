class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        const rLen = grid.length, cLen = grid[0].length;
        const q = [];
        let fresh = 0;
        for(let i = 0; i < rLen; i++) {
            for(let j = 0; j < cLen; j++) {
                if(grid[i][j] === 1) {
                    fresh++;
                }
                else if(grid[i][j] === 2) {
                    q.push([i,j]);
                }
            }
        }
        let time = 0;
        while(q.length && (fresh > 0)) {
            const len = q.length;
            for(let i = 0; i < len; i++) {
                const [r,c] = q.shift();
                const nei = [
                    [r+1, c],
                    [r-1, c],
                    [r, c-1],
                    [r, c+1]
                ];
                for(const [nr, nc] of nei) {
                    if(nr < 0 || nr >= rLen) continue;
                    if(nc < 0 || nc >= cLen) continue;
                    if(grid[nr][nc] !== 1) continue;
                    fresh--;
                    grid[nr][nc] = 2;
                    q.push([nr, nc]);
                }
            }
            time++;
        }

        return (fresh > 0) ? -1 : time;
    }
}

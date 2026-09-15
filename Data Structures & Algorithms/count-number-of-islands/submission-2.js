class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */

    numIslands(grid) {
        const rLen = grid.length, cLen = grid[0].length;
        let count = 0;
        function bfs(r,c){
            const q = [];
            let head = 0;
            grid[r][c] = 'x';
            q.push([r,c]);
            while(head < q.length) {
                const [cr, cc] = q[head];
                head++;

                const nei = [
                    [cr+1, cc],
                    [cr-1, cc],
                    [cr, cc+1],
                    [cr, cc-1]
                ];
                for(const [nr, nc] of nei) {
                    if(nr >= rLen || nc >= cLen) continue;
                    if(nr < 0 || nc < 0) continue;
                    if(grid[nr][nc] !== '1') continue;

                    grid[nr][nc] = 'x';
                    q.push([nr, nc]);
                }
            }

        }

        for(let i = 0; i < rLen; i++) {
            for(let j = 0; j < cLen; j++) {
                if(grid[i][j] == '1') {
                    bfs(i, j);
                    count++;
                }
            }
        }

        return count;

    }
}

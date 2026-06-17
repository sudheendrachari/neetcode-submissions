class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    shortestPathBinaryMatrix(grid) {
        const rLen = grid.length,
            cLen = grid[0].length;
        if (grid[0][0] === 1) return -1;
        function getNeighbours(r, c) {
            return [
                [r - 1, c - 1],
                [r - 1, c],
                [r - 1, c + 1],
                [r, c - 1],
                [r, c + 1],
                [r + 1, c - 1],
                [r + 1, c],
                [r + 1, c + 1],
            ];
        }

        function bfs() {
            let pathLen = 0;
            const queue = [];
            queue.push([0, 0]);
            const visited = new Set();
            visited.add("0-0");
            while (queue.length) {
                pathLen++;
                const qLen = queue.length;
                for (let i = 0; i < qLen; i++) {
                    const [r, c] = queue.shift();
                    if (r === rLen - 1 && c === cLen - 1) {
                        return pathLen;
                    }
                    const neighbours = getNeighbours(r, c);
                    for (const n of neighbours) {
                        const [nr, nc] = n;
                        if (nr < 0 || nc < 0) continue;
                        if (nr > rLen - 1 || nc > cLen - 1) continue;
                        if (visited.has(`${nr}-${nc}`)) continue;
                        if (grid[nr][nc] === 1) continue;
                        queue.push([nr, nc]);
                        visited.add(`${nr}-${nc}`);
                    }
                }
            }
            return -1;
        }
        return bfs();
    }
}

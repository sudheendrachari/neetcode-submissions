class Solution {
    /**
     * @param {number[][]}
     * @returns {number}
     */
    shortestPath(grid) {
        let length = 0;
        const rLen = grid.length,
            cLen = grid[0].length;
        // if(grid[0][0] === 1) return -1;
        const queue = [[0, 0]];
        const visited = new Set();
        visited.add('0-0');
        function getNeighbours(r, c) {
            return [
                [r, c + 1],
                [r, c - 1],
                [r + 1, c],
                [r - 1, c],
            ];
        }
        while (queue.length) {
            const qLen = queue.length;
            for (let i = 0; i < qLen; i++) {
                const [r, c] = queue.shift();
                if (r === rLen - 1 && c === cLen - 1) {
                    return length;
                }
                const ns = getNeighbours(r, c);
                for (const n of ns) {
                    const [nr, nc] = n;
                    if (nr < 0 || nc < 0) continue;
                    if (nr > rLen - 1 || nc > cLen - 1) continue;
                    if (visited.has(`${nr}-${nc}`)) continue;
                    if (grid[nr][nc] === 1) continue;
                    queue.push([nr, nc]);
                    visited.add(`${nr}-${nc}`);
                }
            }
            length += 1;
        }
        return -1;
    }
}

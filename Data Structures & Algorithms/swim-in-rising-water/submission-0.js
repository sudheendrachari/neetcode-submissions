class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    swimInWater(grid) {
        const len = grid.length;
        const minHeap = new MinPriorityQueue(a => a[0]);
        minHeap.enqueue([grid[0][0], 0, 0]);
        const minHeight = Array.from({length: len}, () => new Array(len).fill(-1));
        function getNeighbours(r,c) {
            return [
                [r, c+1],
                [r, c-1],
                [r+1, c],
                [r-1, c]
            ];
        }
        while(!minHeap.isEmpty()) {
            const [h, r, c] = minHeap.dequeue();
            if(r === len - 1 && c === len - 1) return h;
            minHeight[r][c] = h;
            for(const [nr, nc] of getNeighbours(r,c)) {
                if(nr < 0 || nc < 0 || nr >= len || nc >= len) continue;
                if(minHeight[nr][nc] !== -1) continue;
                minHeap.enqueue([
                    Math.max(grid[nr][nc], minHeight[r][c]),
                    nr,
                    nc
                ]);
            }

        }
    }
}

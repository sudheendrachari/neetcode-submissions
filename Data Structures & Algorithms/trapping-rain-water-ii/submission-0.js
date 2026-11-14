const { MinPriorityQueue } = require('@datastructures-js/priority-queue');

class Solution {
    /**
     * @param {number[][]} heightMap
     * @return {number}
     */
    trapRainWater(heightMap) {
        const minHeap = new MinPriorityQueue((cell) => cell[0]); // cell = [height, r, c]
        const rLen = heightMap.length,
            cLen = heightMap[0].length;
        const visited = Array.from({ length: rLen }, () => new Array(cLen).fill(false));
        let res = 0;
        for (let i = 0; i < rLen; i++) {
            for (let j = 0; j < cLen; j++) {
                if (i === 0 || j === 0 || i === rLen - 1 || j === cLen - 1) {
                    minHeap.enqueue([heightMap[i][j], i, j]);
                    visited[i][j] = true;
                }
            }
        }

        while (!minHeap.isEmpty()) {
            const [h, r, c] = minHeap.dequeue();
            const nei = [
                [r + 1, c],
                [r - 1, c],
                [r, c + 1],
                [r, c - 1],
            ];

            for (const [nr, nc] of nei) {
                if (nr < 0 || nc < 0 || nr >= rLen || nc >= cLen || visited[nr][nc] === true) {
                    continue;
                }
                visited[nr][nc] = true;
                const nextH = Math.max(h, heightMap[nr][nc]);
                res += nextH - heightMap[nr][nc];
                minHeap.enqueue([nextH, nr, nc])
            }
        }
        return res;
    }
}

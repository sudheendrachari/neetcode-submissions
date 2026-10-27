class DSU {
    constructor(n) {
        this.parent = Array.from({ length: n }, (_, i) => i);
        this.size = new Array(n).fill(1);
        this.count = 0;
    }

    find(n) {
        if (n !== this.parent[n]) {
            this.parent[n] = this.find(this.parent[n]);
        }
        return this.parent[n];
    }
    union(a, b) {
        const p1 = this.find(a),
            p2 = this.find(b);
        if (p1 === p2) {
            return;
        }
        if (this.size[p1] > this.size[p2]) {
            this.parent[p2] = p1;
            this.size[p1] += this.size[p2];
        } else {
            this.parent[p1] = p2;
            this.size[p2] += this.size[p1];
        }
        this.count--;
    }
}

class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */

    numIslands(grid) {
        const rLen = grid.length,
            cLen = grid[0].length;
        const dsu = new DSU(rLen * cLen);
        for (let i = 0; i < rLen; i++) {
            for (let j = 0; j < cLen; j++) {
                if (grid[i][j] === "1") {
                    dsu.count++;
                }
            }
        }
        const getIdx = (r, c) => r * cLen + c;
        for (let i = 0; i < rLen; i++) {
            for (let j = 0; j < cLen; j++) {
                if (grid[i][j] === "1") {
                    if (i + 1 < rLen && grid[i + 1][j] === "1") {
                        dsu.union(getIdx(i, j), getIdx(i + 1, j));
                    }
                    if (j + 1 < cLen && grid[i][j + 1] === "1") {
                        dsu.union(getIdx(i, j), getIdx(i, j + 1));
                    }
                }
            }
        }
        return dsu.count;
    }
}

class DSU {
    constructor(capacity) {
        this.parent = Array.from({length: capacity}, (_, i) => i);
        this.size = new Array(capacity).fill(1);
    }

    find(n) {
        if(n !== this.parent[n]) {
            this.parent[n] = this.find(this.parent[n]);
        }
        return this.parent[n];
    }
    union(a, b) {
        const p1 = this.find(a), p2 = this.find(b);
        if(p1 === p2) return false;
        if(this.size[p1] > this.size[p2]) {
            this.parent[p2] = p1;
            this.size[p1] += this.size[p2];
        } else {
            this.parent[p1] = p2;
            this.size[p2] += this.size[p1];
        }
        return true;
    }
}

class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @param {number[][]} positions
     * @return {number[]}
     */
    numIslands2(m, n, positions) {
        const dsu = new DSU(m*n);
        const isLand = new Array(m*n).fill(false);
        const answer = [];
        const getIdx = (r, c) => ((r*n) + c);
        let count = 0;
        function getNeighbours(r, c) {
            return [
                [r+1, c],
                [r-1, c],
                [r, c+1],
                [r, c-1]
            ];
        }

        for(const [r, c] of positions) {
            const i = getIdx(r, c);
            if(isLand[i]) {
                answer.push(count);
                continue;
            }
            count++;
            isLand[i] = true;
            for(const [nr, nc] of getNeighbours(r, c)) {
                if(nr < 0 || nc <0 || nr >=m || nc >= n) continue;
                const ni = getIdx(nr, nc);
                if(isLand[ni]) {
                    if(dsu.union(i, ni)) {
                        count--;
                    }
                }
            }
            answer.push(count);
        }

        return answer;
    }
}

class DSU {
    constructor(n) {
        this.parent = Array.from({length: n}, (_, i) => i);
        this.size = new Array(n).fill(0);
        this.components = n;
    }

    find(n) {
        if(n !== this.parent[n]) {
            this.parent[n] = this.find(this.parent[n]);
        }
        return this.parent[n];
    }

    union(a, b) {
        const p1 = this.find(a), p2 = this.find(b);
        if(p1 === p2) {
            return;
        }
        if(this.size[p1] > this.size[p2]) {
            this.parent[p2] = p1;
            this.size[p1] += this.size[p2];
        } else {
            this.parent[p1] = p2;
            this.size[p2] += this.size[p1];
        }

        this.components--;
    }

}

class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        const dsu = new DSU(n);
        for(const [a, b] of edges) {
            dsu.union(a, b);
        }
        return dsu.components;
    }
}

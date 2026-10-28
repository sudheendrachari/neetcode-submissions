class DSU {
    constructor(n) {
        this.parent = Array.from({length: n+1}, (_, i) => i);
        this.size = new Array(n+1).fill(1);
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
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges) {
        const dsu = new DSU(edges.length);
        for(const [p, q] of edges) {
            if(!dsu.union(p, q)) return [p, q];
        }
    }
}

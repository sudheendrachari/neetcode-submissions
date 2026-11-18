class DSU {
    constructor(n) {
        this.parent = Array.from({ length: n }, (_, i) => i);
        this.size = new Array(n).fill(1);
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
            return false;
        }
        if(this.size[p1] >  this.size[p2]) {
            this.parent[p2] = p1;
            this.size[p1] += this.size[p2];
        } else {
            this.parent[p1] = p2;
            this.size[p2] += this.size[p1];
        }
        this.components--;
        return true;
    }
}

class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    // Using DSU
    validTree(n, edges) {
        if(edges.length !== n-1) return false;
        const dsu = new DSU(n);
        for(const [a,b] of edges) {
            if(!dsu.union(a,b)) return false;
        }
        return dsu.components === 1;
    }
}

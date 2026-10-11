class UnionFind {
    /**
     * @param {number} n
     */
    constructor(n) {
        this.size = new Array(n+1).fill(1);
        this.parent = Array.from({length: n+1}, (_, i) => i);
        this.components = n;
    }

    /**
     * @param {number} x
     * @return {number}
     */
    find(x) {
        let p = this.parent[x];
        while(p !== this.parent[p]) {
            this.parent[p] = this.parent[this.parent[p]];
            p = this.parent[p];
        }
        return p
    }

    /**
     * @param {number} x
     * @param {number} y
     * @return {boolean}
     */
    isSameComponent(x, y) {
        return this.find(x) === this.find(y);
    }

    /**
     * @param {number} x
     * @param {number} y
     * @return {boolean}
     */
    union(x, y) {
        let p1 = this.find(x), p2 = this.find(y);
        if(p1 === p2) {
            return false;
        }

        if(this.size[p1] > this.size[p2]) {
            this.parent[p2] = p1;
            this.size[p1] += this.size[p2];
        } else {
            this.parent[p1] = p2;
            this.size[p2] += this.size[p1];
        }
        this.components--;
        

        return true;
    }

    /**
     * @return {number}
     */
    getNumComponents() {
        return this.components;
    }
}

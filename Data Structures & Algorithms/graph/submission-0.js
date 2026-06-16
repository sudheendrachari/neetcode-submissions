class Graph {
    constructor() {
        this.adjList = new Map();
    }

    /**
     * @param {number} src
     * @param {number} dst
     * @return {void}
     */
    addEdge(src, dst) {
        if (!this.adjList.has(src)) this.adjList.set(src, new Set());
        if (!this.adjList.has(dst)) this.adjList.set(dst, new Set());
        this.adjList.get(src).add(dst);
    }

    /**
     * @param {number} src
     * @param {number} dst
     * @return {boolean}
     */
    removeEdge(src, dst) {
        if (!this.adjList.has(src)) return false;
        return this.adjList.get(src).delete(dst);
    }

    /**
     * @param {number} src
     * @param {number} dst
     * @return {boolean}
     */
    hasPath(src, dst) {
        const queue = [];
        const visited = new Set();
        queue.push(src);
        visited.add(src);
        while (queue.length) {
            const qLen = queue.length;
            for (let i = 0; i < qLen; i++) {
                const node = queue.shift();
                if (node === dst) return true;
                for (const neighbour of this.adjList.get(node)) {
                    if(neighbour === dst) return true;
                    if (!this.adjList.has(neighbour)) continue;
                    if (visited.has(neighbour)) continue;
                    queue.push(neighbour);
                    visited.add(neighbour);
                }
            }
        }
        return false;
    }
}

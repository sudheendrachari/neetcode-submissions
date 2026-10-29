/**
 * const PriorityQueue = require('priority-queue-js');
 */

class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @param {number} src
     * @returns {Object}
     */
    shortestPath(n, edges, src) {
        const adjList = {};
        for (let i = 0; i < n; i++) {
            adjList[i] = [];
        }
        for(const [t, f, w] of edges) {
            adjList[t].push([f, w]);
        }
        const shortest = {};
        const q = new PriorityQueue((a, b) => (a[0] - b[0]));
        for(let i = 0; i < n; i++) {
            shortest[i] = -1;
        }
        q.enqueue([0, src]);
        while(!q.isEmpty()) {
            const [weight, node] = q.dequeue();
            if(shortest[node] === -1) {
                shortest[node] = weight;
            } else {
                continue;
            }
            for(const [nextNode, nextWeight] of adjList[node]) {
                if(shortest[nextNode] !== -1) continue;
                q.enqueue([weight+nextWeight, nextNode]);
            }
        }
        return shortest;
    }
}

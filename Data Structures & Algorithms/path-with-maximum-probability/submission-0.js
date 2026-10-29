class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @param {number[]} succProb
     * @param {number} start_node
     * @param {number} end_node
     * @return {number}
     */
    maxProbability(n, edges, succProb, start_node, end_node) {
        const adjList = {};
        for(let i = 0; i < n; i++) {
            adjList[i] = [];
        }

        for(let i = 0; i < edges.length; i++) {
            const [a, b] = edges[i];
            adjList[a].push([succProb[i], b]);
            adjList[b].push([succProb[i], a]);
        }
        const maxProb = new Array(n).fill(0);
        const maxHeap = new MaxPriorityQueue(elem => elem[0]);
        maxHeap.enqueue([1, start_node]);
        maxProb[start_node] = 1;

        while(!maxHeap.isEmpty()){
            const [prob, node] = maxHeap.dequeue();
            if(node === end_node) return prob;

            for(const [nextProb, nextNode] of adjList[node]) {
                const p = prob * nextProb;
                if(p > maxProb[nextNode]) {
                    maxProb[nextNode] = p;
                    maxHeap.enqueue([p, nextNode]);
                }
                
            }
        }
        return 0;
    }
}

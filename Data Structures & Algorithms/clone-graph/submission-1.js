/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        if(!node) return null;
        const map = new Map();
        function clone(n) {
            if(map.has(n.val)) return map.get(n.val);
            const copy = new Node(n.val);
            map.set(n.val, copy)
            for (const nei of n.neighbors) {
                copy.neighbors.push(clone(nei))
            }
            return copy;
        }
        return clone(node);
    }
}

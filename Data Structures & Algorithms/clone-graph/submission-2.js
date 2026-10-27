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
    cloneGraph(root) {
        if(!root) return null;
        const oldToNew = new Map();
        function clone(node) {
            if(oldToNew.has(node)) return oldToNew.get(node);
            
            const copy = new Node(node.val);
            oldToNew.set(node, copy);
            for(const nei of node.neighbors) {
                copy.neighbors.push(clone(nei))
            }
            return copy;
        }
        return clone(root);
    }
}

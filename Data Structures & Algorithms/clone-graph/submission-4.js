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
    // cloneGraph(root) {
    //     if(!root) return null;
    //     const oldToNew = new Map();
    //     function clone(node) {
    //         if(oldToNew.has(node)) return oldToNew.get(node);
            
    //         const copy = new Node(node.val);
    //         oldToNew.set(node, copy);
    //         for(const nei of node.neighbors) {
    //             copy.neighbors.push(clone(nei))
    //         }
    //         return copy;
    //     }
    //     return clone(root);
    // }
    cloneGraph(root) {
        if(!root) return null;
        const q = [root];
        const oldToNew = new Map();
        let head = 0;
        oldToNew.set(root, new Node(root.val));
        while(head < q.length) {
            const cur = q[head];
            const curClone = oldToNew.get(cur);
            for(const nei of cur.neighbors) {
                if(!oldToNew.has(nei)) {
                    oldToNew.set(nei, new Node(nei.val));
                    q.push(nei);
                }
                curClone.neighbors.push(oldToNew.get(nei));
            }
            head++;
        }
        return oldToNew.get(root);
    }
}

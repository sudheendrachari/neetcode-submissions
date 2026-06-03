/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    // isSameTree(p, q) {
    //     if(p !== null && q !==null) {
    //         return (p.val === q.val) && this.isSameTree(p.left, q.left) && this.isSameTree(p.right, q.right);
    //     }
    //     if(p === null && q === null) {
    //         return true;
    //     }
    //     return false;
    // }
    
    // concise version
    // isSameTree(p, q) {
    //     if(p === null && q === null) {
    //         return true;
    //     } else if(p === null || q === null || p.val !== q.val) {
    //         return false;
    //     }
    //     return this.isSameTree(p.left, q.left) && this.isSameTree(p.right, q.right);
    // }

    // iterative version
    isSameTree(p, q) {
        const queue = new Queue();
        queue.enqueue([p,q]);
        while(!queue.isEmpty()) {
            const [pNode, qNode] = queue.dequeue();
            if (pNode === null && qNode === null) continue;
            if (pNode === null || qNode === null || pNode.val !== qNode.val) return false;
            queue.enqueue([pNode.left, qNode.left]);
            queue.enqueue([pNode.right, qNode.right]);
        }
        return true;
    }
}

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
     * @param {TreeNode} root
     * @return {TreeNode}
     */
    // invertTree(root) {
    //     if(root === null) {
    //         return null;
    //     }
    //     let leftInverted = this.invertTree(root.left), rightInverted = this.invertTree(root.right);
    //     root.left = rightInverted;
    //     root.right = leftInverted;
    //     return root;
    // }
    
    // recursive
    invertTree(root) {
        if(root === null) {
            return null;
        }
        const queue = [root];
        while(queue.length > 0) {
            // swap left and right
            const node = queue.shift();
            [node.left, node.right] = [node.right, node.left];
            //add left and right to queue
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
        return root;
    }
}

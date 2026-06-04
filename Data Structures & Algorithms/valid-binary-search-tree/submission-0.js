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
     * @return {boolean}
     */
    isValidBST(root) {
        return this.isValidNode(root, -Infinity, Infinity);
    }

    isValidNode(node, leftBound, rightBound) {
        if(node === null) return true;
        if (!( (node.val > leftBound) && (rightBound > node.val))) {
            return false;
        }
        return (
            this.isValidNode(node.left, leftBound, node.val) &&
            this.isValidNode(node.right, node.val, rightBound)
        );
    }
}

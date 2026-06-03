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
    invertTree(root) {
        if(root === null) {
            return null;
        }
        let leftInverted = this.invertTree(root.left), rightInverted = this.invertTree(root.right);
        root.left = rightInverted;
        root.right = leftInverted;
        return root;
    }
}

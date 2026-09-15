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

        function isValidNode(node, leftBound, rightBound) {
            if(node === null) return true;
            const isValidValue = (node.val > leftBound) && (node.val < rightBound);
            return isValidValue && (
                isValidNode(node.left, leftBound, node.val) &&
                isValidNode(node.right, node.val, rightBound)
            );
        }

        return isValidNode(root, -Infinity, Infinity);

    }
}

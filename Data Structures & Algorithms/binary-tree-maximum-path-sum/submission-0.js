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
     * @return {number}
     */
    maxPathSum(root) {
        let maxSum = -Infinity;
        function max(node) {
            if (!node) return 0;
            let leftMax = max(node.left);
            let rightMax = max(node.right);
            let localMax = node.val + Math.max(leftMax, 0) + Math.max(rightMax, 0);
            maxSum = Math.max(maxSum, localMax);
            return node.val + Math.max(leftMax, rightMax, 0);
        }
        max(root);
        return maxSum;
    }
}

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

        function findMax(node) {
            if(!node) return 0;

            const leftMax = Math.max(findMax(node.left), 0);
            const rightMax = Math.max(findMax(node.right), 0);
            const localMax = node.val + leftMax + rightMax;
            maxSum = Math.max(maxSum, localMax);
            return node.val + Math.max(leftMax, rightMax);
        }
        findMax(root);
        return maxSum
    }
}

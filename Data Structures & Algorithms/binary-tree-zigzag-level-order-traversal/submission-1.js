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
     * @return {number[][]}
     */
    zigzagLevelOrder(root) {
        if (!root) return [];
        const q = [root];
        let isLTR = true;
        const result = [];
        while (q.length) {
            const len = q.length;
            const list = new Array(len);
            for (let i = 0; i < len; i++) {
                const node = q.shift();
                list[ isLTR ? i : len - 1 - i] = node.val;
                if (node.left) q.push(node.left);
                if (node.right) q.push(node.right);
            }
            result.push(list);
            isLTR = !isLTR;
        }
        return result;
    }
}

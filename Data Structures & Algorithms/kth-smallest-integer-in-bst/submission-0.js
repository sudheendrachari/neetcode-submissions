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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        const stack = [];
        let i = 0;
        let cur = root;
        while(stack.length > 0 || cur) {
            while(cur !== null) {
                stack.push(cur);
                cur = cur.left;
            }
            cur = stack.pop();
            i++;
            if(i == k) {
                return cur.val;
            }
            cur = cur.right;
        }

    }
}

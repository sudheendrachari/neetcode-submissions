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
    levelOrder(root) {
        const res = [];
        if(!root) return res;
        const q = [root];
        while(q.length) {
            const levelBreadth = q.length;
            const levelValues = [];
            for(let i = 0; i< levelBreadth; i++) {
                const node = q.shift();
                levelValues.push(node.val);
                if(node.left) q.push(node.left);
                if(node.right) q.push(node.right);
            }
            res.push(levelValues);
        }
        return res;
    }
}

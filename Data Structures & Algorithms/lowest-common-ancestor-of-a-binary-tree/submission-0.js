/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
class Solution {
    /**
     * @param {TreeNode} root
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) { // 5, 3, 12 // 3, 3, 12
        if(!root) {// r = 5
            return null;
        }
        if((root === p) || (root === q)) {
            return root;
        }
        const foundInLeft = this.lowestCommonAncestor(root.left, p, q); 
        const foundInRight = this.lowestCommonAncestor(root.right, p, q);

        if(foundInLeft && foundInRight) {
            return root;
        }

        return foundInLeft || foundInRight;
    }
}

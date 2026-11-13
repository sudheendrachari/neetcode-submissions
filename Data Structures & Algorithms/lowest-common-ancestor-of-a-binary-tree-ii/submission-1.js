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
    lowestCommonAncestor(root, p, q) {
        function dfs(node) {
            if(!node) {
                return {
                    lca: null,
                    foundP: false,
                    foundQ: false
                };
            }
            const left = dfs(node.left);
            const right = dfs(node.right);

            const foundP = (node === p) || left.foundP || right.foundP;
            const foundQ = (node === q) || left.foundQ || right.foundQ;

            // if lca found, retain from child
            let lca = left.lca || right.lca;

            if(!lca && (foundP && foundQ)) {
                lca = node;
            }

            return {
                lca,
                foundP,
                foundQ
            }

        }
        const result = dfs(root);
        if(result.foundP && result.foundQ) {
            return result.lca;
        }

        return null;
    }
}

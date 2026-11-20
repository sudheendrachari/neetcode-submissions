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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        const arr = [];
        function helper(node) {
            if(!node) {
                arr.push('N');
                return;
            }
            arr.push(node.val);
            helper(node.left);
            helper(node.right);
        }
        helper(root);
        return arr.join(',');
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        const parts = data.split(',');
        let i = 0;
        function dfs() {
            const val = parts[i++];
            if(val === 'N') {
                return null;
            }
            const node = new TreeNode(Number(val));
            node.left = dfs();
            node.right = dfs();
            return node;
        }

        return dfs();
    }
}

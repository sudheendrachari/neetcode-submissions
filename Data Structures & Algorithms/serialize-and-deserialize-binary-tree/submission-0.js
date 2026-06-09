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
        let strArr = [];
        function preorder(node) {
            if (!node) {
                strArr.push("N");
                return;
            }
            strArr.push(node.val);
            preorder(node.left);
            preorder(node.right);
        }
        preorder(root);
        return strArr.join(",");
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        const preOrder = data.split(",");
        let preIndex = 0;
        function dfs() {
            const curVal = preOrder[preIndex];
            preIndex++;
            if (curVal === "N") {
                return null;
            }
            const node = new TreeNode(Number(curVal));
            node.left = dfs();
            node.right = dfs();
            return node;
        }
        return dfs();
    }
}

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
    // kthSmallest(root, k) {
    //     const stack = [];
    //     let i = 0;
    //     let cur = root;
    //     while(stack.length > 0 || cur) {
    //         while(cur !== null) {
    //             stack.push(cur);
    //             cur = cur.left;
    //         }
    //         cur = stack.pop();
    //         i++;
    //         if(i == k) {
    //             return cur.val;
    //         }
    //         cur = cur.right;
    //     }

    // }

    // recursive
    kthSmallest(root, k) {
        if(k === 0) return root;
        let smallest = null, i = 0;

        function traverse(node) {
            if(!node || smallest !== null) return;
            traverse(node.left);
            i++;
            if(i === k) {
                smallest = node.val;
                return;
            }
            traverse(node.right);
        }
        traverse(root);
        return smallest;
    }

}

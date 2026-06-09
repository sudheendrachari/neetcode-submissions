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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     * Striver video: https://www.youtube.com/watch?v=aZNaLrVebKQ
     */
    // buildTree(preorder, inorder) {
    //     if(!preorder.length || !inorder.length) {
    //         return null;
    //     }
    //     let root = new TreeNode(preorder[0]);
    //     let mid = inorder.indexOf(preorder[0]);
    //     root.left = this.buildTree(
    //         preorder.slice(1, mid+1),
    //         inorder.slice(0, mid)
    //     );
    //     root.right = this.buildTree(
    //         preorder.slice(mid+1),
    //         inorder.slice(mid+1)
    //     );
    //     return root
    // }
    //with map, and slightly more effecient since we are not creating new arrays
    // for each recusrive call
    buildTree(preorder, inorder) {
	const inOrderMap = new Map();
	inorder.forEach((val, i) => inOrderMap.set(val, i));
	let preIndex = 0;

	function dfs(l,r) {
		if(l>r) return null;
		const rootVal = preorder[preIndex];
		const rootIndexInorder = inOrderMap.get(rootVal);
		const root = new TreeNode(rootVal);
		preIndex = preIndex+1;
		root.left = dfs(l, rootIndexInorder-1);
		root.right = dfs(rootIndexInorder+1, r);
		return root;
	}
	return dfs(0, inorder.length-1);
}
}

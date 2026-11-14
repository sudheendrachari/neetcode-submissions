class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    // O(n) time and O(n) space approach
    // O(1) space in Solution 2 tab 
    trap(height) {
        const n = height.length;
        const leftMax = new Uint32Array(n);
        const rightMax = new Uint32Array(n);

        leftMax[0] = height[0];
        for(let l = 1; l < n; l++) {
            leftMax[l] = Math.max(height[l], leftMax[l-1]);
        }
        rightMax[n - 1] = height[n - 1];
        for(let r = n-2; r >=0; r--) {
            rightMax[r] = Math.max(height[r], rightMax[r+1]);
        }

        let res = 0;
        for(let i = 0; i < n; i++) {
            const h = height[i];
            res += Math.min(leftMax[i], rightMax[i]) - h;
        }
        return res;
    }
}

class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     * Two pointer approach O(1) space 
     */
    trap(height) {
        let l = 0, r = height.length - 1;
        let leftMax = height[l], rightMax = height[r];
        let res = 0;
        while(l < r) {
            if(leftMax < rightMax) {
                l++;
                leftMax = Math.max(leftMax, height[l]);
                res += leftMax - height[l];
            } else {
                r--;
                rightMax = Math.max(rightMax, height[r]);
                res += rightMax - height[r];
            }
        }
        return res;
    }
}

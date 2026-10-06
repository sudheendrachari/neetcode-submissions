class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        const len = height.length;
        const maxLeft = new Array(len).fill(0);
        const maxRight = new Array(len).fill(0);
        
        let curMax = 0;
        for(let i = 0; i < len; i++) {
            maxLeft[i] = curMax;
            curMax = Math.max(curMax, height[i]);
        }
        curMax = 0;
        for(let i = len - 1; i >=0 ; i--) {
            maxRight[i] = curMax;
            curMax = Math.max(curMax, height[i]);
        }
        let total = 0;

        for(let i = 0; i < len; i++) {
            const trapped = Math.min(maxLeft[i], maxRight[i]) - height[i];
            total += trapped > 0 ? trapped : 0;
        }

        return total;
    }
}

class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let curMax = 0;
        const maxLeft = [], maxRight = [];
        for(let i = 0; i < height.length; i++) {
            const h = height[i];
            maxLeft.push(curMax);
            curMax = Math.max(curMax, h);
        }
        curMax = 0;
        for(let i = height.length - 1; i >= 0; i--) {
            const h = height[i];
            maxRight.unshift(curMax);
            curMax = Math.max(curMax, h);
        }
        const res = [];
        for(let i = 0; i < height.length; i++) {
            const h = height[i];
            const water = Math.min(maxLeft[i], maxRight[i]) - h;
            res.push(Math.max(water, 0));
        }
        return res.reduce((a,b) => a+b, 0);
    }
}

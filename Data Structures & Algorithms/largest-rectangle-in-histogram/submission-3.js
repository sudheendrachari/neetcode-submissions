class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        const stack = []; // [index, height]
        let maxArea = -Infinity;
        for(let i = 0; i < heights.length; i++) {
            const h = heights[i];
            let prevI, prevH;
            while(stack.length > 0 && stack[stack.length - 1][1] > h) {
                [prevI, prevH] = stack.pop();
                const area = (i - prevI) * prevH;
                maxArea = Math.max(area, maxArea);
            }
            stack.push([(prevI ?? i), h]);
        }
        while(stack.length > 0) {
            const [index, h] = stack.pop();
            const area = (heights.length - index) * h;
            maxArea = Math.max(maxArea, area);
        }
        return maxArea;
    }
}

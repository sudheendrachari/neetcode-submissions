class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {

        const stack = []; //[index, height]
        let maxArea = 0;

        for(let i = 0; i < heights.length; i++) {
            const h = heights[i];
            let start = i;
            while(stack.length > 0 && ( stack[stack.length - 1][1] > h  )) {
                const last = stack.pop();
                const area = (i - last[0]) * last[1];
                maxArea = Math.max(maxArea, area);
                start = last[0];
            }
            stack.push([start, h]);
        }
        for(const [idx, height] of stack) {
            const area = height * (heights.length - idx);
            maxArea = Math.max(maxArea, area);
        }
        return maxArea;
    }
}

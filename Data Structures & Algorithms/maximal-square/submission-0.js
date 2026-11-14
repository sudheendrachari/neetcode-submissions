class Solution {
    /**
     * @param {character[][]} matrix
     * @return {number}
     */
    maximalSquare(matrix) {
        function largestRectange(heights) {
            let maxArea = 0;
            const stack = [];
            for (let i = 0; i < heights.length; i++) {
                const h = heights[i];
                let prevI, prevH;
                while (stack.length > 0 && stack[stack.length - 1][1] > h) {
                    [prevI, prevH] = stack.pop();
                    const side = Math.min((i - prevI) , prevH);
                    const area = side * side;
                    maxArea = Math.max(area, maxArea);
                }
                stack.push([prevI ?? i, h]);
            }
            while (stack.length > 0) {
                const [idx, h] = stack.pop();
                const side = Math.min((heights.length - idx), h);
                const area = side * side;
                maxArea = Math.max(area, maxArea);
            }
            return maxArea;
        }
        const rLen = matrix.length,
            cLen = matrix[0].length;
        const heights = new Array(cLen).fill(0);

        let max = 0;
        for (let r = 0; r < rLen; r++) {
            for (let c = 0; c < cLen; c++) {
                heights[c] = matrix[r][c] === "1" ? heights[c] + 1 : 0;
            }
            const area = largestRectange(heights);
            max = Math.max(max, area);
        }
        return max;
    }
}

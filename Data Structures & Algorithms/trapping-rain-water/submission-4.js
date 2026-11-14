class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        const stack = [];
        let res = 0;
        for (let i = 0; i < height.length; i++) {
            const h = height[i];
            while (stack.length > 0 && h > stack[stack.length - 1][1]) {
                const [,base] = stack.pop();
                if(stack.length === 0) break;
                const [leftIdx, leftH] = stack[stack.length - 1],
                    rightH = h,
                    width = i - leftIdx - 1,
                    height = Math.min(leftH, rightH) - base;
                res += width * height;
            }
            stack.push([i,h]);
        }

        return res;
    }
}

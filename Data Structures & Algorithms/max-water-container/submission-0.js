class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     * [2, *, *, *, 10] m = 4 * min(2, 10) = 4 * 2 = 8
     * [2, 3, *, *, 10] m = 3 * min(3,10) = 3 * 3 = 9
     */
    maxArea(heights) {
        let r = heights.length-1;
        let maxR = r;
        let minL = 0;
        let max = 0;
        for(let l = 0; l<r;) {
            let area = (r-l) * Math.min(heights[l] , heights[r]);
            if(area > max) { 
                max = area;
                minL = l;
                maxR = r;
            }
            if(heights[l] < heights[r])  {
                l++;
            } else {
                r--;                
            }
        }
        return max;
    }
}

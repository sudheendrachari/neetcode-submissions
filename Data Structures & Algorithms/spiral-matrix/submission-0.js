class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number[]}
     */
    spiralOrder(matrix) {
        const rows = matrix.length, cols = matrix[0].length;
        let top = 0, bottom = rows-1, left = 0, right = cols-1;
        const res = [];
        while(top <= bottom && left <= right) {
            for(let col = left; col <= right; col++) {
                res.push(matrix[top][col]);
            }
            top++;
            if(top > bottom) break;
            for(let row = top; row <=bottom; row++) {
                res.push(matrix[row][right]);
            }
            right--;
            if(right < left) break;
            for(let col = right; col >= left; col--) {
                res.push(matrix[bottom][col]);
            }
            bottom--;
            if(bottom < top) break;
            for(let row = bottom; row >= top; row--) {
                res.push(matrix[row][left]);
            }
            left++;
            if(left > right) break;
        }
        return res;
    }
}

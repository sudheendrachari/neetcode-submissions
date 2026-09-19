class Solution {
    /**
     * @param {number[][]} grid
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(grid, target) {
        const rLen = grid.length;
        const cLen = grid[0].length;
        let L = 0, R = (rLen * cLen) - 1;

        while(L <= R) {
            let m = L + Math.floor((R-L)/2);
            let row = Math.floor(m / cLen);
            let col = m % cLen;
            if(target < grid[row][col]){
                R = m - 1;
            } else if(target > grid[row][col]) {
                L = m + 1;
            } else {
                return true;
            }
        }
        return false;
    }
}

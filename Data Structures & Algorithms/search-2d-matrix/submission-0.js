class Solution {
    /**
     * @param {number[][]} grid
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(grid, target) {
        const rLen = grid.length, cLen = grid[0].length;
        let L = [0,0], R = [rLen - 1, cLen - 1];
        function toIndex([r, c]) {
            return (r * cLen) + c;
        }

        function fromIndex(i) {
            return [Math.floor(i/cLen), i % cLen];
        }

        while(toIndex(L) <= toIndex(R)) {
            let mid = Math.floor((toIndex(L)+toIndex(R))/2);
            const [cr,cc] = fromIndex(mid);
            const val = grid[cr][cc];
            if(val < target) {
                L = fromIndex(mid+1);
            } else if(target < val) {
                R = fromIndex(mid-1);
            } else {
                return true;
            }
        }


        return false;
    }
}

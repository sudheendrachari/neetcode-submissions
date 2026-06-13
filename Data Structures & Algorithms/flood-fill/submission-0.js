class Solution {
    /**
     * @param {number[][]} image
     * @param {number} sr
     * @param {number} sc
     * @param {number} color
     * @return {number[][]}
     */
    floodFill(image, sr, sc, color) {
        const oCol = image[sr][sc];
        const rLen = image.length, cLen = image[0].length;
        const seen = new Set();
        function dfs(i,j){
            if(i === rLen || j === cLen) return;
            if(i < 0 || j < 0) return;
            const id = `${i}-${j}`;
            if(seen.has(id)) return;
            seen.add(id);
            if(image[i][j] !== oCol) {
                return;
            }
            image[i][j] = color;

            dfs(i, j+1);
            dfs(i, j-1);
            dfs(i+1, j);
            dfs(i-1, j);

        }
        dfs(sr,sc);
        return image;
    }
}

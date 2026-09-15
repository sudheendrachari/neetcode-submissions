class Solution {
    /**
     * @param {number[][]} image
     * @param {number} sr
     * @param {number} sc
     * @param {number} color
     * @return {number[][]}
     */
    floodFill(image, sr, sc, color) {
        const rLen = image.length, cLen = image[0].length;
        const orgColor = image[sr][sc];
        if(orgColor === color) return image;
        image[sr][sc] = color;
        const q = [[sr, sc]];
        let head = 0;
        while(head < q.length) {
            const [r,c] = q[head];
            head++;

            const nei = [
                [r, c+1],
                [r, c-1],
                [r+1, c],
                [r-1, c]
            ];
            for(const n of nei){
                const [nr, nc] = n;
                if(nr >= rLen || nc >=cLen) continue;
                if(nr < 0 || nc < 0) continue;
                if(image[nr][nc] !== orgColor) continue;

                image[nr][nc] = color;
                q.push([nr, nc]);
            }
        }
        return image;
    }
}

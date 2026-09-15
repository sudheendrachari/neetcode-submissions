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
        const visited = new Set();
        const q = [[sr,sc]];
        while(q.length) {
            const len = q.length;
            for(let i = 0; i<len; i++) {
                const [r,c] = q.shift();
                visited.add(`${r}-${c}`);
                image[r][c] = color;
                const nei = [
                    [r+1, c],
                    [r-1, c],
                    [r, c+1],
                    [r, c-1]
                ];
                for(const n of nei) {
                    const [nr, nc] = n;
                    if((nr === rLen) || (nc === cLen)) continue;
                    if((nr < 0) || (nc < 0)) continue;
                    if(visited.has(`${nr}-${nc}`)) continue;
                    if(image[nr][nc] !== orgColor) continue;
                    visited.add(`${nr}-${nc}`);
                    q.push([nr,nc]);
                }
            }
        }
        return image;
    }
}

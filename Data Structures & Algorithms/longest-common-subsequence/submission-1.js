class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1, text2) {
        const cache = new Map();
        const m = text1.length, n = text2.length;
        function dfs(i, j) {
            if(i === m || j === n) return 0;
            const key = `${i}-${j}`;
            if(cache.has(key)) return cache.get(key);
            let res;
            if(text1[i] === text2[j]){
                res = 1 + dfs(i+1, j+1);
            } else {
                res = Math.max(
                    dfs(i+1, j),
                    dfs(i, j+1)
                );
            }
            cache.set(key, res);
            return res;
        }
        return dfs(0,0);
    }
}

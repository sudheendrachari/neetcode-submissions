class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        const rLen = board.length,
            cLen = board[0].length;
        const visited = Array.from({ length: rLen }, () => new Array(cLen).fill(false));
        function dfs(r, c, i) {
            if (i === word.length) return true;
            if (
                r < 0 ||
                c < 0 ||
                r >= rLen ||
                c >= cLen ||
                visited[r][c] ||
                word[i] !== board[r][c]
            ) {
                return false;
            }
            visited[r][c] = true;
            const res =
                dfs(r, c + 1, i + 1) ||
                dfs(r, c - 1, i + 1) ||
                dfs(r - 1, c, i + 1) ||
                dfs(r + 1, c, i + 1);
            visited[r][c] = false;
            return res;
        }
        for (let r = 0; r < rLen; r++) {
            for (let c = 0; c < cLen; c++) {
                if (dfs(r, c, 0)) return true;
            }
        }
        return false;
    }
}

class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        const rLen = board.length, cLen = board[0].length;
        const visited = Array.from({length: rLen}, () => new Array(cLen).fill(false));
        function dfs(r, c, i) {
            if(i === word.length) return true;
            if(r < 0 || c < 0 || r >= rLen || c >= cLen) return false;
            if(board[r][c] !== word[i]) return false;
            if(visited[r][c]) return false;

            visited[r][c] = true;
            const found = dfs(r, c+1, i+1) || dfs(r, c-1, i+1) ||
                dfs(r+1, c, i+1) || dfs(r-1, c, i+1);
            visited[r][c] = false;
            return found;

        }

        for(let i = 0; i < rLen; i++) {
            for(let j = 0; j < cLen; j++) {
                if(dfs(i, j, 0)) return true;
            }
        }
        return false;
    }
}

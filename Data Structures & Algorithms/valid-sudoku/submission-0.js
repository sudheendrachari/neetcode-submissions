class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = Array.from({length: 9}, ()=> new Set());
        const cols = Array.from({length: 9}, ()=> new Set());
        const boxes = Array.from({length: 9}, ()=> new Set());
        for(let i = 0; i< rows.length; i++) {
            for(let j = 0; j < cols.length; j++) {
                const box = Math.floor(i/3)* 3 + Math.floor(j/3);
                const val = board[i][j];
                if(val === '.') continue;
                if(rows[i].has(val) || cols[j].has(val) || boxes[box].has(val)) return false;
                rows[i].add(val);
                cols[j].add(val);
                boxes[box].add(val);
            }
        }
        return true;
    }
}

class TrieNode {
    children = new Map();
    isEndOfWord = false;
}
class Solution {
    root = new TrieNode();
    addWords(words) {
        for (const word of words) {
            let node = this.root;
            for (const ch of word) {
                if (!node.children.has(ch)) node.children.set(ch, new TrieNode());
                node = node.children.get(ch);
            }
            node.isEndOfWord = true;
        }
    }
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board, words) {
        const rLen = board.length,
            cLen = board[0].length;
        const used = Array.from({ length: rLen }, () => new Uint8Array(cLen));
        this.addWords(words);
        const result = new Set();
        function dfs(r, c, node, word) {
            if(r < 0 || c < 0 || r >= rLen || c >= cLen) return;
            if(used[r][c]) return;
            if(!node.children.has(board[r][c])) return;

            used[r][c] = true;
            node = node.children.get(board[r][c]);
            word += board[r][c];
            if(node.isEndOfWord) {
                result.add(word);
            }
            dfs(r, c+1, node, word);
            dfs(r, c-1, node, word);
            dfs(r-1, c, node, word);
            dfs(r+1, c, node, word);
            used[r][c] = false;

        }

        for (let r = 0; r < rLen; r++) {
            for (let c = 0; c < cLen; c++) {
                dfs(r, c, this.root, "");
            }
        }

        return Array.from(result);
    }
}

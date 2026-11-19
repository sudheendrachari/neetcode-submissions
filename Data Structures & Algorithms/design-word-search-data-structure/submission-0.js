class TrieNode {
    children = new Map();
    isEndOfWord = false;
}

class WordDictionary {
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let node = this.root;
        for (const ch of word) {
            if (!node.children.has(ch)) {
                node.children.set(ch, new TrieNode());
            }
            node = node.children.get(ch);
        }
        node.isEndOfWord = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        function dfs(j, cur) {
            let node = cur;
            for (let i = j; i < word.length; i++) {
                const ch = word[i];
                if (ch === ".") {
                    for (const child of node.children.values()) {
                        if (dfs(i + 1, child)) {
                            return true;
                        }
                    }
                    return false;
                } else {
                    if (!node.children.has(ch)) {
                        return false;
                    }
                    node = node.children.get(ch);
                }
            }
            return node.isEndOfWord;
        }
        if(dfs(0, this.root)) {
            return true;
        }
        return false;
    }
}

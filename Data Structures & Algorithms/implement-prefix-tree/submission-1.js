class Node {
    children = new Map();
    isWord = false;
}
class PrefixTree {
    constructor() {
        this.root = new Node();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let node = this.root;
        for (const ch of word) {
            if (!node.children.has(ch)) node.children.set(ch, new Node());
            node = node.children.get(ch);
        }
        node.isWord = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let node = this.root;
        for (const ch of word) {
            if (!node.children.has(ch)) return false;
            node = node.children.get(ch);
        }
        return node.isWord;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let node = this.root;
        for (const ch of prefix) {
            if (!node.children.has(ch)) return false;
            node = node.children.get(ch);
        }
        return true;
    }
}

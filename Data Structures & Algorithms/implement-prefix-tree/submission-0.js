class Node {
    isWord = false;
    constructor(char) {
        this.char = char;
        this.children = new Map();
    }
}

class PrefixTree {
    root;
    constructor() {
        this.root = new Node('');
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let node = this.root;
        for(const char of word) {
            if(!node.children.has(char)) {
                node.children.set(char, new Node(char));
            }
            node = node.children.get(char);
        }
        node.isWord = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let node = this.root;
        for(const char of word) {
            if(!node.children.has(char)) {
                return false;
            }
            node = node.children.get(char);
        }
        return node.isWord;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let node = this.root;
        for(const char of prefix) {
            if(!node.children.has(char)) {
                return false;
            }
            node = node.children.get(char);
        }
        return true;
    }
}

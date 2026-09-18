class Node {
    prev;
    next;
    url;
    constructor(url) {
        this.url = url;
    }
}

class BrowserHistory {
    /**
     * @constructor
     * @param {string} homepage
     */
    constructor(homepage) {
        this.homepage = homepage;
        this.start = new Node("");
        this.end = new Node("");
        const homeNode = new Node(homepage);
        this.start.next = homeNode;
        homeNode.prev = this.start;
        this.end.prev = homeNode;
        homeNode.next = this.end;
        this.current = homeNode;
    }

    /**
     * @param {string} url
     * @return {void}
     */
    visit(url) {
        const node = new Node(url);
        const prev = this.current;
        const next = this.end;
        prev.next = node;
        node.prev = prev;
        next.prev = node;
        node.next = next;
        this.current = node;
    }

    /**
     * @param {number} steps
     * @return {string}
     */
    back(steps) {
        while (steps > 0 && this.current.prev !== this.start) {
            steps--;
            this.current = this.current.prev;
        }
        return this.current.url;
    }

    /**
     * @param {number} steps
     * @return {string}
     */
    forward(steps) {
        while (steps > 0 && this.current.next !== this.end) {
            steps--;
            this.current = this.current.next;
        }
        return this.current.url;
    }
}

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */

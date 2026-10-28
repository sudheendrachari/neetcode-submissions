class DSU {
    constructor(n) {
        this.parent = Array.from({ length: n }, (_, i) => i);
        this.size = new Array(n).fill(1);
    }

    find(n) {
        if (n !== this.parent[n]) {
            this.parent[n] = this.find(this.parent[n]);
        }
        return this.parent[n];
    }
    union(a, b) {
        const p1 = this.find(a),
            p2 = this.find(b);
        if (p1 === p2) {
            return;
        }
        if (this.size[p1] > this.size[p2]) {
            this.parent[p2] = p1;
            this.size[p1] += this.size[p2];
        } else {
            this.parent[p1] = p2;
            this.size[p2] += this.size[p1];
        }
    }
}

class Solution {
    /**
     * @param {string[][]} accounts
     * @return {string[][]}
     */
    accountsMerge(accounts) {
        const dsu = new DSU(accounts.length)
        const emailMap = new Map();
        for(let i = 0; i < accounts.length; i++) {
            for(let j = 1; j < accounts[i].length; j++) {
                const email = accounts[i][j];
                if(emailMap.has(email)) {
                    dsu.union(emailMap.get(email), i);
                }
                else {
                    emailMap.set(email, i);
                }
            }
        }

        const result = new Map();
        for(let i = 0; i < accounts.length; i++) {
            const rootIndex = dsu.find(i);
            if(!result.has(rootIndex)) result.set(rootIndex, new Set());
            const [name, ...emails] = accounts[i];
            emails.forEach(email => result.get(rootIndex).add(email));
        }
        const output = [];
        for(const [id, emailSet] of result.entries()) {
            output.push([accounts[id][0], ...Array.from(emailSet).sort()]);
        }
        return output;
    }
}

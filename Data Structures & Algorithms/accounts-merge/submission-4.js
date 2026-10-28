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

        const emailGroups = new Map();
        for(const [email, id] of emailMap) {
            const rootIndex = dsu.find(id);
            if(!emailGroups.has(rootIndex)) emailGroups.set(rootIndex, []);
            emailGroups.get(rootIndex).push(email);
        }

        const output = [];
        for(const [id, emailList] of emailGroups.entries()) {
            output.push([accounts[id][0], ...emailList.sort()]);
        }
        return output;
    }
}

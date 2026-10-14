class Solution {
    /**
     * @param {string[][]} accounts
     * @return {string[][]}
     */
    accountsMerge(accounts) {
        class UnionFind {
            size;
            parents;
            constructor(capacity) {
                this.size = new Array(capacity).fill(1);
                this.parents = Array.from({ length: capacity }, (_, i) => i);
            }
            find(n) {
                // while(n !== this.parent[n]) {
                //     this.parent[n] = this.parent[this.parent[n]];
                //     n = this.parent[n];
                // }
                // return n;
                if (n !== this.parents[n]) {
                    this.parents[n] = this.find(this.parents[n]);
                }
                return this.parents[n];
            }
            union(p, q) {
                const p1 = this.find(p),
                    p2 = this.find(q);
                if (p1 === p2) {
                    return false;
                }
                if (this.size[p1] > this.size[p2]) {
                    this.parents[p2] = p1;
                    this.size[p1] += this.size[p2];
                } else {
                    this.parents[p1] = p2;
                    this.size[p2] += this.size[p1];
                }
                return true;
            }
        }
        const uf = new UnionFind(accounts.length);
        const emailMap = new Map();
        for (let i = 0; i < accounts.length; i++) {
            const account = accounts[i];
            for (let j = 1; j < account.length; j++) {
                const email = account[j];
                if (emailMap.has(email)) {
                    uf.union(emailMap.get(email), i);
                } else {
                    emailMap.set(email, i);
                }
            }
        }
        const emailGroups = new Map();
        for (const [email, accountIndex] of emailMap.entries()) {
            const root = uf.find(accountIndex);
            if (!emailGroups.has(root)) {
                emailGroups.set(root, []);
            }
            emailGroups.get(root).push(email);
        }
        const result = [];
        for (const [accountId, emails] of emailGroups.entries()) {
            result.push([accounts[accountId][0], ...emails.sort()]);
        }
        return result;
    }
}

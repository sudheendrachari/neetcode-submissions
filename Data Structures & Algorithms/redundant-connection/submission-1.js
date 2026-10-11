class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges) {
        const parent = Array.from({length: edges.length+1}, (_, i) => i);
        const size = new Array(edges.length+1).fill(1);


        function find(n) {
            let p = parent[n];
            while(p !== parent[p]) {
                parent[p] = parent[parent[p]];
                p = parent[p];
            }
            return p;
        }

        function unionBySize(a, b) {
            let p1 = find(a), p2 = find(b);
            if(p1 === p2) {
                return false;
            }
            if(size[p1] > size[p2]) {
                parent[p2] = p1;
                size[p1] += size[p2];
            } else {
                parent[p1] = p2;
                size[p2] += size[p1];
            }
            return true;
        }

        for(const [n1, n2] of edges) {
            if(!unionBySize(n1, n2)) {
                return [n1, n2];
            }
        }
        return []

    }
}

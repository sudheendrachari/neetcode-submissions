class Solution {
    /**
     * @param {string[][]} equations
     * @param {number[]} values
     * @param {string[][]} queries
     * @return {number[]}
     */
    calcEquation(equations, values, queries) {
        const adjList = new Map();
        for (let i = 0; i < equations.length; i++) {
            const [num, den] = equations[i];
            if (!adjList.has(num)) adjList.set(num, []);
            if (!adjList.has(den)) adjList.set(den, []);
            adjList.get(num).push([den, values[i]]);
            adjList.get(den).push([num, 1 / values[i]]);
        }


        function bfs(src, target) {
            if(!adjList.has(src) || !adjList.has(target)) return -1;
            const visited = new Set();
            const q = [];
            let head = 0;
            q.push([src, 1]);
            visited.add(src);
            while(head < q.length) {
                const [number, weight] = q[head++];
                if(number === target) {
                    return weight;
                }

                for(const [n, w] of adjList.get(number)) {
                    if(visited.has(n)) continue;
                    q.push([n, w * weight]);
                    visited.add(n);
                }
            }
            return -1;
        }

        const result = [];
        for(let i = 0; i < queries.length; i++) {
            const [s, t] = queries[i];
            result.push(bfs(s, t));
        }
        return result;
    }
}

class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        const adjList = new Map();
        const visited = new Set();
        let groups = 0;
        for(const [src, dst] of edges) {
            if(!adjList.has(src)) adjList.set(src, []);
            if(!adjList.has(dst)) adjList.set(dst, []);
            adjList.get(src).push(dst);
            adjList.get(dst).push(src);
        }

        function dfs(cur) {
            if(visited.has(cur)) return;
            visited.add(cur);
            const connections = adjList.get(cur) || [];
            for(const node of connections) {
                dfs(node);
            }
        }

        for(let i = 0; i<n; i++) {
            if(visited.has(i)) continue;
            dfs(i);
            groups++;
        }
        return groups;
    }
}

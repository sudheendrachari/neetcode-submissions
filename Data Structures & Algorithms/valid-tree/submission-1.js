class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        const adjList = new Map();
        const visited = new Set();
        for(const [src, dst] of edges) {
            if(!adjList.has(src)) adjList.set(src,[]);
            if(!adjList.has(dst)) adjList.set(dst,[]);
            adjList.get(src).push(dst);
            adjList.get(dst).push(src);
        }

        function dfs(cur, prev){
            if(visited.has(cur)) return false;
            visited.add(cur);
            const connections = adjList.get(cur) || [];            
            for(const node of connections) {
                if(node == prev) continue;
                if(!dfs(node, cur)) {
                    return false;
                }
            }
            return true;

        }

        return dfs(0, -1) && n === visited.size;

    }
}

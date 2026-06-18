class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const preMap = new Map();
        const nodeVisited = new Set();
        for(let i = 0; i<numCourses; i++) {
            preMap[i] = [];
        }
        for(const [src, dst] of prerequisites) {
            preMap[src].push(dst);
        }
        function dfs(node, path){
            if(path.has(node)) return true;
            const pre = preMap[node];
            path.add(node);
            for(const p of pre) {
                if(nodeVisited.has(p)) continue;
                const found = dfs(p, path);
                if(found) {
                    return true;
                }
            }
            nodeVisited.add(node);
            path.delete(node);
        }
        let cycleFound = false;
        for(let i = 0; i<numCourses; i++) {

            if(!nodeVisited.has(i)){
                cycleFound = cycleFound || dfs(i, new Set())
            }
        }
        return !cycleFound;
    }
}

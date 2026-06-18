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
            preMap.set(i, []);
        }
        for(const [src, dst] of prerequisites) {
            preMap.get(src).push(dst);
        }

        function dfs(node, path){
            if(path.has(node)) return true;
            path.add(node);
            const prereq = preMap.get(node)
            for(const p of prereq) {
                if(nodeVisited.has(p)) continue;
                return dfs(p, path);
            }
            path.delete(node);
            nodeVisited.add(node);
            return false;
        }
        let cycleFound = false;
        for(let i = 0; i< numCourses; i++) {
            if(!nodeVisited.has(i)) {
                cycleFound = cycleFound || dfs(i, new Set());
            }
        }
        return !cycleFound;
    }
}

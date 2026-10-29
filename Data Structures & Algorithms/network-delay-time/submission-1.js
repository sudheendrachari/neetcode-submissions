class Solution {
    /**
     * @param {number[][]} times
     * @param {number} n
     * @param {number} k
     * @return {number}
     */
    networkDelayTime(times, n, k) {
        const adjList = {};
        for(let i = 1; i <= n; i++){
            adjList[i] = [];
        }
        for(const [source, target, time] of times) {
            adjList[source].push([target, time]);
        }
        const minTime = {};
        const minHeap = new MinPriorityQueue(a => a[1]);
        minHeap.enqueue([k, 0]);
        while(!minHeap.isEmpty()) {
            const [node, time] = minHeap.dequeue();
            if(minTime.hasOwnProperty(node)) continue;
            minTime[node] = time;

            for(const [nextNode, nextTime] of adjList[node]) {
                if(minTime.hasOwnProperty(nextNode)) continue;
                minHeap.enqueue([nextNode, time + nextTime]);
            }
        }
        let result = 0;
        for(let i = 1; i <= n; i++){
            if(!minTime.hasOwnProperty(i)) return -1;
            result = Math.max(result, minTime[i])
        }
        return result;
        
    }
}

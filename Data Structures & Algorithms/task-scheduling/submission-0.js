class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        const freq = new Map();
        for(const task of tasks) {
            freq.set(task,  (freq.get(task) || 0)+1);
        }
        const maxHeap = new MaxPriorityQueue(); // [2, 2]
        for(const [_, chCount] of freq.entries()) {
            maxHeap.enqueue(chCount);
        }
        const q = []; // [], [[1, 3]]
        let qHead = 0;
        let time = 0;
        while(!maxHeap.isEmpty() || qHead < q.length) {
            time++; // 1
            if(!maxHeap.isEmpty()) {
                const count = maxHeap.dequeue(); // 2
                if(count>1) {
                    q.push([count - 1, time + n]);
                }
            }
            if(q[qHead] && q[qHead][1] === time) {
                maxHeap.enqueue(q[qHead][0]);
                qHead++;
            }
        }
        return time;
    }
}

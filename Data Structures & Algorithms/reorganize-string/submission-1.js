class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    reorganizeString(s) {
        const maxHeap = new MaxPriorityQueue(elem => elem[0]);
        let prev = null;
        let res = "";
        const freq = new Map();
        for (const ch of s) {
            freq.set(ch, (freq.get(ch) || 0) + 1);
        }
        for(const [ch, count] of freq.entries()) {
            maxHeap.enqueue([count, ch]);
        }
        while(maxHeap.size() > 0 || prev) {
            if(prev && maxHeap.isEmpty()) {
                return "";
            }
            let [count, ch] = maxHeap.dequeue();
            res +=ch;
            count--;
            if(prev) {
                maxHeap.enqueue(prev);
                prev = null;
            }

            if(count !== 0) {
                prev = [count, ch];
            }
        }
        return res;
    }
}

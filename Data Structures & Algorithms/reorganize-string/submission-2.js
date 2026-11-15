// const { MaxPriorityQueue } = require('@datastructures-js/priority-queue');
class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    reorganizeString(s) {
        const freq = new Map();
        for(const ch of s) {
            freq.set(ch, (freq.get(ch) || 0) + 1);
        }
        const maxHeap = new MaxPriorityQueue(elem => elem[0]);
        for(const [ch, count] of freq.entries()) {
            maxHeap.enqueue([count, ch])
        }
        let res = [], prevElem;
        while(!maxHeap.isEmpty()) {
            let [curCount, curCh] = maxHeap.dequeue();
            res.push(curCh);
            curCount--;
            if(prevElem) {
                maxHeap.enqueue(prevElem);
                prevElem = null;
            }
            if(curCount > 0) {
                prevElem = [curCount, curCh];
            }
        }
        return prevElem ? '' : res.join('');
        // or
        // return res.length === s.length ? res.join('') : '';
    }
}

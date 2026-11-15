//const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        if(!lists || lists.length === 0) return null;
        const minHeap = new MinPriorityQueue(node => node.val);
        const head = new ListNode();
        let cur = head;

        for(let i = 0; i < lists.length; i++) {
            lists[i] && minHeap.enqueue(lists[i]);
        }

        while(!minHeap.isEmpty()) {
            const nextElem = minHeap.dequeue();
            cur.next = nextElem;
            cur = cur.next;
            nextElem.next && minHeap.enqueue(nextElem.next);
        }
        return head.next;
    }
}

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
     * @param {ListNode} head
     * @return {ListNode}
     */

    // Iterative
    // reverseList(head) {
    //     let cur = head,
    //         prev = null,
    //         next = null;
    //     while (cur) {
    //         next = cur.next;
    //         cur.next = prev;
    //         prev = cur;
    //         cur = next;
    //     }
    //     return prev;
    // }

    // Recursive
    reverseList(head) {
        while(head === null || head.next === null) {
            return head;
        }

        const newHead = this.reverseList(head.next);

        head.next.next = head;
        head.next = null;

        return newHead;
    }
}

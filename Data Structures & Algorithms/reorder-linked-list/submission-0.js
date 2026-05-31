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
     * @return {void}
     */
    reorderList(head) {
        // find where we need to split list into two halves

        let slow = head, fast = head;
        while(fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        const secondList = slow.next;
        slow.next = null;

        // head to slow is one list, secondList to last is another
        // reverse secondList to last now

        let prev = null, cur = secondList;
        let next = null;
        while(cur) {
            next = cur.next;
            cur.next = prev;
            prev = cur;
            cur = next;
        }

        const secondListHead = prev;
        // now cur will have head of reversed list of second half

        // now merge both

        let start = new ListNode();
        let c = start;
        let c1 = head, c2 = secondListHead;
        while(c1 !== null && c2 !== null) {
            let n1 = c1.next, n2 = c2.next;
            c.next = c1;
            c1.next = c2;
            c = c2;
            c1 = n1;
            c2 = n2;
        }

        c.next = c1 || c2;

        return start.next;

    }
}

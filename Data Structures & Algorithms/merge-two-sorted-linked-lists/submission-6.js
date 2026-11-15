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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        if(!list1 && !list2) return null;
        const head = new ListNode();
        let p = head;
        let p1 = list1, p2 = list2;
        while (p1 && p2) {
            if(p1.val <= p2.val) {
                p.next = p1;
                p1 = p1.next;
                p.next.next = null;
            } else {
                p.next = p2;
                p2 = p2.next;
                p.next.next = null;
            }
            p = p.next;
        }
        if(p1) {
            p.next = p1;
        } else if(p2){
            p.next = p2;
        }
        return head.next;
    }
}

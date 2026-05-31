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
        if (list1 === null) {
            return list2;
        }
        if (list2 === null) {
            return list1;
        }
        let list3Head = new ListNode();
        let list3Cur = list3Head;
        let c1 = list1,
            c2 = list2;
        while (c1 !== null && c2 !== null) {
            if (c1.val <= c2.val) {
                list3Cur.next = c1;
                list3Cur = c1;
                c1 = c1.next;
            } else {
                list3Cur.next = c2;
                list3Cur = c2;
                c2 = c2.next;
            }
        }
        if (c1) {
            list3Cur.next = c1;
        } else {
            list3Cur.next = c2;
        }
        return list3Head.next;
    }
}

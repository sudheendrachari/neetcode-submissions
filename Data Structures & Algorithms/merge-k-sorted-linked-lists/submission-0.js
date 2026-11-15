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
        while (lists.length > 1) {
            const tempList = [];
            for (let i = 0; i < lists.length; i = i+2) {
                const list1 = lists[i],
                    list2 = i + 1 === lists.length ? null : lists[i + 1];
                tempList.push(this.mergeTwoLists(list1, list2));
            }
            lists = tempList;
        }
        return lists[0];
    }

    mergeTwoLists(list1, list2) {
        const head = new ListNode();
        let tail = head;
        let p1 = list1,
            p2 = list2;
        while (p1 && p2) {
            if (p1.val < p2.val) {
                tail.next = p1;
                p1 = p1.next;
            } else {
                tail.next = p2;
                p2 = p2.next;
            }
            tail = tail.next;
        }
        if (p1) {
            tail.next = p1;
        }
        if (p2) {
            tail.next = p2;
        }
        return head.next;
    }
}

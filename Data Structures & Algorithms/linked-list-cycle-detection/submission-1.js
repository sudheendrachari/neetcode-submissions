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
     * @return {boolean}
     */
    hasCycle(head) {
        let cur = head;
        while(cur) {
            if(cur.visited) {
                return true;
            }
            cur.visited = true;
            cur = cur.next;
        }
        return false;
    }
}

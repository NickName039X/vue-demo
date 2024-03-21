/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
    let prev = left;
    let last = right;
    if (head && head.next) {
        const t = reverseList(head.next)
        console.log(head);
        head.next.next = head;
        head.next = null;

        return t;

    }
    return head;
};

/** 
 *反转部分单链表 
 * @param list 为传入的单链表, m 为开始反转的节点, n 为结束的反转节点 
 */ 
//  public static Node reverseBetween(Node list , int m , int n){ 
//     if (m == 1){ 
//         return reverseListN(list,n); 
//     } 
//     list.next = reverseBetween(list.next,m-1,n-1); 
//     return list; 
// } 
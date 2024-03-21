
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

/**
 * 
 * 用例：// {"val":1,"next":{"val":2,"next":{"val":3,"next":{"val":4,"next":{"val":5,"next":null}}}}}
 * 方式：递归
 * head要返回，不要用递归返回的节点，因为链表反转已经断裂，要用返回的head重新构建链表
 */

var reverseList = function (head) {
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
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * 方法2
 * 头插法
 * 逆序创建链表
 * 
 */

var reverseList = function (head) {
    let pre = new ListNode('', null);
    let tmp = new ListNode('', null);
    let cur = head;
    while (cur != null) {
        tmp = cur.next;
        cur.next = pre;
        pre = cur;
        cur = tmp;
     }
    return pre;
};

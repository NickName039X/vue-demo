
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var reverseList = function (head) {
    if (head.next) {
        const t = reverseList(head.next) 
        head.next.next = head;
        head.next = null;
        // console.log(JSON.stringify(head));

        return t;
    }
    return head;
};


// {"val":1,"next":{"val":2,"next":{"val":3,"next":{"val":4,"next":{"val":5,"next":null}}}}}

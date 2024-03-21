var deleteDuplicates = function(head) {
    if (head=== null || head.next === null) return head;
    let fast = head.next;
    let low = head;
    while (fast !== null) {
        if (fast.val !== low.val) {
            low = low.next;
            low.val = fast.val;

        }
        fast = fast.next;
    }

    low.next = null;

     return head;
};
var mergeTwoLists = function(l1, l2) {
  let node = new ListNode()
  cur = node
  while(l1 != null && l2 != null) {
    if(l1.val < l2.val) {
      cur.next= l1
      cur = cur.next
      l1 = l1.next
    } else {
      cur.next = l2
      cur = cur.next
      l2 = l2.next
    }
  }
  if(l1 != null) {
    cur.next = l1
  } else {
    cur.next = l2
  }
  return node.next
};

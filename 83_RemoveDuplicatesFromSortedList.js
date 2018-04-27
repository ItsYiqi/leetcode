// -- 83_RemoveDuplicatesFromSortedList
var deleteDuplicates = function(head){
    if(!head || !head.next) return head;
    var current = head;
    var fast;
    while(current){
      fast = current;
      while(fast && current.val == fast.val ){
        fast = fast.next;
      }
      current.next = fast;
      current = fast;
    }
}
// or you can use another way : comparing one by one
var deleteDuplicates1 = function (head) {
    var current = head;
    // Condition
    while(current && current.next){
      if(current.val = current.next.val){
        current.next = current.next.next;
      }
      else{
        current = current.next;
      }
    }
    return head;
}

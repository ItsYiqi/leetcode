var removeNthFromEnd = function(head, n) {
    var i =0;
    var tempArray = [];
    while(head.val!==null)    {
        tempArray.push(head.val);
        head = head.next;
    }
    
    return tempArray;
    
};
console.log()
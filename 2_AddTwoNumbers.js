/**
You are given two non-empty linked lists representing two non-negative
integers. The digits are stored in reverse order and each of their nodes
contain a single digit. Add the two numbers and return it as a linked list.
You may assume the two numbers do not contain any leading zero, except the
number 0 itself.
**/

/**
Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }

**/

var addTwoNumbers = function(l1, l2){
    var carry = 0;
    var sum = 0;
    var list = new ListNode(0);
    var head = list;//指针指向list的头部

    while(l1!==null|l2!==null){
      //当l1不为空的时候
      if(l1!==null){
        sum = sum+l1.val;
        l1= l1.next;
      }
      if(l2!==null){
        sum = sum+l2.val;
        l2=l2.next;
      }
      if(sum>10){
        sum = sum-10;
        carry=1;
      }
      var node = new ListNode(sum);
      head.next = node;
      head=head.next;

      sum = carry;
      carry = 0;

    };
    return list.next;



}

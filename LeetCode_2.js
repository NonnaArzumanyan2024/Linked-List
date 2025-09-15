/*
LeetCode 2: Add Two Numbers
---------------------------

You are given two non-empty linked lists representing two non-negative integers. 
The digits are stored in reverse order, and each node contains a single digit. 
Add the two numbers and return the sum as a linked list.

Example:
Input:  l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]      // 342 + 465 = 807

Input:  l1 = [0], l2 = [0]
Output: [0]

Requirements:
- Time Complexity: O(max(m, n))
- Space Complexity: O(max(m, n))
*/



class ListNode {                                      // Linked List Node
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function createLinkedList(values) {                   // Helper function to create a linked list from an array
  let dummy = new ListNode(0);
  let current = dummy;

  for (let val of values) {
    current.next = new ListNode(val);
    current = current.next;
  }

  return dummy.next;
}

function addTwoNumbers(l1, l2) {                      // Add Two Numbers function
  let dummy = new ListNode(0);                        // Dummy node to simplify head handling
  let current = dummy;                                // Pointer to build the result list
  let carry = 0;                                      // Carry for sums >= 10

  while (l1 !== null || l2 !== null || carry > 0) {   // Loop while there are nodes in l1, l2 or carry remains
    const x = l1 ? l1.value : 0;                      // Get current digit from l1 or 0
    const y = l2 ? l2.value : 0;                      // Get current digit from l2 or 0

    const sum = x + y + carry;                        // Add digits and carry
    carry = Math.floor(sum / 10);                     // New carry
    const digit = sum % 10;                           // Digit for this node

    current.next = new ListNode(digit);               // Create node and attach to result
    current = current.next;                           // Move pointer forward

    if (l1) l1 = l1.next;                             // Move l1 pointer
    if (l2) l2 = l2.next;                             // Move l2 pointer
  }

  return dummy.next;                                  // Return the head of result list
}

function printLinkedList(head) {                      // Helper function to print linked list as array (for testing)
  const result = [];

  while (head) {
    result.push(head.value);
    head = head.next;
  }

  return result;
}


// Test Cases

// Test 1: l1 = [2,4,3], l2 = [5,6,4] -> [7,0,8]
let l1 = createLinkedList([2,4,3]);
let l2 = createLinkedList([5,6,4]);
console.log(printLinkedList(addTwoNumbers(l1, l2)));   // [7,0,8]

// Test 2: l1 = [0], l2 = [0] -> [0]
let l3 = createLinkedList([0]);
let l4 = createLinkedList([0]);
console.log(printLinkedList(addTwoNumbers(l3, l4)));   // [0]

// Test 3: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9] -> [8,9,9,9,0,0,0,1]
let l5 = createLinkedList([9,9,9,9,9,9,9]);
let l6 = createLinkedList([9,9,9,9]);
console.log(printLinkedList(addTwoNumbers(l5, l6)));   // [8,9,9,9,0,0,0,1]

// Test 4: l1 = [1], l2 = [9,9] -> [0,0,1]
let l7 = createLinkedList([1]);
let l8 = createLinkedList([9,9]);
console.log(printLinkedList(addTwoNumbers(l7, l8)));   // [0,0,1]

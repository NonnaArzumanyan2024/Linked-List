/*
LeetCode 445: Add Two Numbers II
---------------------------------

You are given two non-empty linked lists representing two non-negative integers.
The digits are stored in forward order. Each node contains a single digit.
Add the two numbers and return the sum as a linked list.

Example:
Input:  l1 = [7,2,9,6], l2 = [3,0,2]
Output: [7,5,9,9]   // 7296 + 302 = 7599

Requirements:
- Time Complexity: O(n)
- Space Complexity: O(n)
*/



class ListNode {                                     // Linked List Node
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function createLinkedList(values) {                  // Helper function to create a linked list from array
  let dummy = new ListNode(0);
  let current = dummy;
  
  for (let val of values) {
    current.next = new ListNode(val);
    current = current.next;
  }

  return dummy.next;
}


function addTwoNumbersII(l1, l2) {                   // Add Two Numbers II function
  const stack1 = [];                                 // Stack to store digits of first list
  const stack2 = [];                                 // Stack to store digits of second list

  while (l1) {                                       // Push all nodes' values from l1 into stack1
    stack1.push(l1.value);                           // Add current node's value to stack
    l1 = l1.next;                                    // Move to next node
  }

  while (l2) {                                       // Push all nodes' values from l2 into stack2
    stack2.push(l2.value);                           // Add current node's value to stack
    l2 = l2.next;                                    // Move to next node
  }

  let carry = 0;                                     // Initialize carry for addition
  let result = null;                                 // Head of the resulting list (starts empty)

  while (stack1.length > 0 || stack2.length > 0 || carry > 0) {      // Process stacks until both are empty and no carry remains

    const x = stack1.length > 0 ? stack1.pop() : 0;  // Pop from stack1 or use 0 if empty
    const y = stack2.length > 0 ? stack2.pop() : 0;  // Pop from stack2 or use 0 if empty

    const sum = x + y + carry;                       // Add the two digits + carry
    carry = Math.floor(sum / 10);                    // Update carry for next iteration
    const digit = sum % 10;                          // Current digit to insert in result

    const node = new ListNode(digit);                // Create new node with current digit
    node.next = result;                              // Insert new node at the front of the result list
    result = node;                                   // Move the result pointer to the new head
  }

  return result;                                     // Return the head of the final sum list
}


function printLinkedList(head) {                     // Helper function to print linked list as array
  const result = [];

  while (head) {
    result.push(head.value);
    head = head.next;
  }

  return result;
}


// Test Cases

// Test 1: l1 = [7,2,9,6], l2 = [3,0,2] -> [7,5,9,9]
let l1 = createLinkedList([7,2,9,6]);
let l2 = createLinkedList([3,0,2]);
console.log(printLinkedList(addTwoNumbersII(l1, l2)));    // [7,5,9,9]

// Test 2: l1 = [9,9,9], l2 = [1] -> [1,0,0,0]
let l3 = createLinkedList([9,9,9]);
let l4 = createLinkedList([1]);
console.log(printLinkedList(addTwoNumbersII(l3, l4)));    // [1,0,0,0]

// Test 3: l1 = [0], l2 = [0] -> [0]
let l5 = createLinkedList([0]);
let l6 = createLinkedList([0]);
console.log(printLinkedList(addTwoNumbersII(l5, l6)));    // [0]

// Test 4: l1 = [1,2,3], l2 = [4,5,6] -> [5,7,9]  
let l7 = createLinkedList([1,2,3]);
let l8 = createLinkedList([4,5,6]);
console.log(printLinkedList(addTwoNumbersII(l7, l8)));    // [5,7,9]

// Test 5: l1 = [9,9,9,9], l2 = [9,9,9] -> [1,0,9,9,8]   
let l9 = createLinkedList([9,9,9,9]);
let l10 = createLinkedList([9,9,9]);
console.log(printLinkedList(addTwoNumbersII(l9, l10)));   // [1,0,9,9,8]
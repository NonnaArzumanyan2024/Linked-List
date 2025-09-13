/*
LeetCode 203: Remove Linked List Elements
------------------------------------------

Given the head of a linked list and an integer `val`, remove all the nodes of the linked list 
that have `value === val`, and return the new head of the list.

Example:
Input:  head = [1,2,6,3,4,5,6], val = 6  
Output: [1,2,3,4,5]

Input:  head = [7,7,7,7], val = 7  
Output: []

Input:  head = [1,2,3,4,5], val = 10  
Output: [1,2,3,4,5]

Requirements:
- Time Complexity: O(n)
- Space Complexity: O(1)
*/



class ListNode {                          // Linked List Node
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function createLinkedList(values) {       // Create a linked list from array of values
  let dummy = new ListNode(0);
  let current = dummy;
  for (let val of values) {
    current.next = new ListNode(val);
    current = current.next;
  }
  
  return dummy.next;
}

function linkedListToArray(head) {        // Convert linked list to array for easy testing
  let result = [];
  let current = head;

  while (current) {
    result.push(current.value);
    current = current.next;
  }

  return result;
}

function removeElements(head, val) {
  let dummy = new ListNode(0);              // Dummy node to handle edge cases
  dummy.next = head;
  let current = dummy;                      // Start traversal from dummy

  while (current && current.next) {
    if (current.next.value === val) {
      current.next = current.next.next;     // Skip node with matching value
    } else {
      current = current.next;               // Move forward
    }
  }

  return dummy.next;                        // Return new head
}


// Test Cases

// Test 1: Remove 6 from [1,2,6,3,4,5,6]
let head1 = createLinkedList([1,2,6,3,4,5,6]);
console.log(linkedListToArray(removeElements(head1, 6)));   // [1,2,3,4,5]

// Test 2: Remove 7 from [7,7,7,7]
let head2 = createLinkedList([7,7,7,7]);
console.log(linkedListToArray(removeElements(head2, 7)));   // []

// Test 3: Remove 10 from [1,2,3,4,5] (not found)
let head3 = createLinkedList([1,2,3,4,5]);
console.log(linkedListToArray(removeElements(head3, 10)));  // [1,2,3,4,5]

// Test 4: Remove 1 from [1] (single node removed)
let head4 = createLinkedList([1]);
console.log(linkedListToArray(removeElements(head4, 1)));   // []

// Test 5: Remove 2 from [1,2,2,1]
let head5 = createLinkedList([1,2,2,1]);
console.log(linkedListToArray(removeElements(head5, 2)));   // [1,1]

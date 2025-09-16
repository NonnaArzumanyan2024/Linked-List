/*
LeetCode 328: Odd Even Linked List
----------------------------------

Goal: Reorder a linked list so that all nodes at odd indices
(1-based positions: 1st, 3rd, 5th, …) appear first,
followed by all nodes at even indices (2nd, 4th, 6th, …).

Time Complexity:  O(n)  // We visit each node once
Space Complexity: O(1)  // We rearrange pointers in place
*/




class ListNode {                            // Node structure for a singly linked list
  constructor(val) {
    this.val = val;                         // The value/data of the node
    this.next = null;                       // Pointer to the next node (default: null)
  }
}

var oddEvenList = function(head) {
  if (!head || !head.next) return head;     // If the list is empty OR has only one node, no rearrangement is needed
  let odd = head;                           // 'odd' pointer starts at the first node (index 1)
  let even = head.next;                     // 'even' pointer starts at the second node (index 2)
  let evenHead = even;                      // Keep the start of the even list so we can attach it later
  
  while (even && even.next) {               //  'even' is not null and 'even.next' exists (means there is another odd node ahead)
    odd.next = even.next;                   // Connect current odd node to the next odd node (skip one even node)
    odd = odd.next;                         // Move odd pointer forward to that next odd node
    even.next = odd.next;                   // Connect current even node to the next even node (skip one odd node)
    even = even.next;                       // Move even pointer forward to that next even node
  }

  odd.next = evenHead;                      // Now attach the entire even list after the odd list

  return head;                              // Return the head of the rearranged linked list
}

function createLinkedList(arr) {            // Build a linked list from an array of numbers
  let dummy = new ListNode(0);              // Temporary dummy head
  let current = dummy;                      // Pointer to build the list
  
  for (const v of arr) {
    current.next = new ListNode(v);         // Create new node and link it
    current = current.next;                 // Move pointer forward
  }

  return dummy.next;                        // Return the real head (skip the dummy node)
}

function toArray(head) {                    // Convert a linked list back to a JavaScript array for easy output
  const result = [];

  while (head) {
    result.push(head.val);                  // Collect the current node's value
    head = head.next;                       // Move to the next node
  }

  return result;
}


//Test Cases

const head = createLinkedList([3,5,4,1,4,6,6]);

// Rearrange and print: odd-index nodes first, then even-index nodes
console.log("Test 1:", toArray(oddEvenList(head))); // Output: [3,4,4,6,5,1,6]

// Empty list
console.log("Test 2:", toArray(oddEvenList(createLinkedList([]))));
// Expected: []

// Single node
console.log("Test 3:", toArray(oddEvenList(createLinkedList([10]))));
// Expected: [10]

// Two nodes
console.log("Test 4:", toArray(oddEvenList(createLinkedList([1,2]))));
// Expected: [1,2]

// Three nodes
console.log("Test 5:", toArray(oddEvenList(createLinkedList([1,2,3]))));
// Expected: [1,3,2]

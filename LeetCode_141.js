/*
LeetCode 141: Linked List Cycle - Easy
---------------------------------------

Given the head of a singly linked list, determine if the linked list has a cycle in it.

A cycle occurs when a node's next pointer points back to a previous node in the list instead of null.
To solve this, use Floyd’s Tortoise and Hare algorithm (two-pointer approach).

Example: 
Input: head = [3,2,0,-4] with a cycle at position 1 (tail connects to node index 1)
Output: true

Input: head = [1,2] with no cycle
Output: false

Requirements:
- Time Complexity: O(n)
- Space Complexity: O(1)
*/



function hasCycle(head) {
  let slow = head;                      // Slow pointer moves one step at a time
  let fast = head;                      // Fast pointer moves two steps at a time

  while (fast && fast.next) {           // Traverse the list while fast and fast.next are not null
    slow = slow.next;                   // Move slow by one node
    fast = fast.next.next;              // Move fast by two nodes

    if (slow === fast) {                // If slow and fast meet, a cycle exists
      return true;
    }
  }

  return false;                         // If fast reaches the end, there is no cycle
}

class ListNode {                        // Helper class for linked list
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function createLinkedList(values, pos) {      // Helper function to create a linked list with optional cycle
  let dummy = new ListNode(0);
  let current = dummy;
  let cycleNode = null;

  for (let i = 0; i < values.length; ++i) {
    current.next = new ListNode(values[i]);
    current = current.next;
    if (i === pos) cycleNode = current;
  }

  if (cycleNode) {
    current.next = cycleNode;                   // create cycle
  }

  return dummy.next;
}


// Test Cases

// Test 1: head = [3,2,0,-4], cycle at position 1
let head1 = createLinkedList([3,2,0,-4], 1);
console.log(hasCycle(head1));  // true

// Test 2: head = [1,2], no cycle
let head2 = createLinkedList([1,2], -1);
console.log(hasCycle(head2));  // false

// Test 3: head = [1], no cycle
let head3 = createLinkedList([1], -1);
console.log(hasCycle(head3));  // false

// Test 4: head = [1,2,3,4,5], cycle at position 0 (head points to itself)
let head4 = createLinkedList([1,2,3,4,5], 0);
console.log(hasCycle(head4));  // true

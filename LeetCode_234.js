/*
LeetCode 234: Palindrome Linked List
-------------------------------------
Problem Description:
Given the head of a singly linked list, return true if the list is a palindrome, and false otherwise.

Example:
Input:  head = [1,2,2,1]
Output: true

Input:  head = [1,2]
Output: false

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

function isPalindrome(head) {

  function reverse(head) {                // Helper function to reverse a linked list
    let prev = null;
    let current = head;

    while (current) {                     // Standard iterative reversal
      let nextNode = current.next;        // Store the next node
      current.next = prev;                // Reverse the link
      prev = current;                     // Move prev forward
      current = nextNode;                 // Move current forward
    }

    return prev;                          // Return the new head of the reversed list
  }

  // Step 1: Use two-pointer technique to find the middle of the list
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;                     // Move one step
    fast = fast.next.next;                // Move two steps
  }

  // Step 2: Reverse the second half of the list
  let start = head;
  let mid = reverse(slow);

  // Step 3: Compare values from the start and reversed second half
  while (mid) {
    if (start.value !== mid.value) {
      return false;                       // Not a palindrome
    }

    start = start.next;
    mid = mid.next;
  }

  return true;                            // All values matched: it's a palindrome
}


// Test Cases

// Test 1: head = [1,2,2,1] -> true
let head1 = createLinkedList([1,2,2,1]);
console.log(isPalindrome(head1));      // true

// Test 2: head = [1,2] -> false
let head2 = createLinkedList([1,2]);
console.log(isPalindrome(head2));      // false

// Test 3: head = [1] -> true (single element is always palindrome)
let head3 = createLinkedList([1]);
console.log(isPalindrome(head3));      // true

// Test 4: head = [] -> true (empty list is considered palindrome)
let head4 = createLinkedList([]);
console.log(isPalindrome(head4));      // true

// Test 5: head = [1,2,3,2,1] -> true (odd length palindrome)
let head5 = createLinkedList([1,2,3,2,1]);
console.log(isPalindrome(head5));      // true

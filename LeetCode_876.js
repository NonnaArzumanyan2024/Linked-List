/*
876. Middle of the Linked List - Easy

Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.

Examples:
1. Input: head = [1,2,3,4,5]       -> Output: [3,4,5]
2. Input: head = [1,2,3,4,5,6]     -> Output: [4,5,6]

Constraints:
- The number of nodes in the list is in the range [1, 100].
- 1 <= Node.val <= 100
*/



// ===== Definition for singly-linked list =====
function ListNode(val, next) {                         // Constructor function for linked list nodes
    this.val  = (val === undefined ? 0 : val);         // Assign value (default = 0 if not provided)
    this.next = (next === undefined ? null : next);    // Assign next pointer (default = null if not provided)
}


// ===== Iterative solution using slow & fast pointers =====
// Time Complexity: O(n) -> traverse list once
// Space Complexity: O(1) -> constant extra space

function middleNode(head) {
    let slow = head;                                    // Slow pointer moves 1 step at a time
    let fast = head;                                    // Fast pointer moves 2 steps at a time

    while (fast && fast.next) {                         // Traverse until fast reaches the end
        slow = slow.next;                               // Move slow one step
        fast = fast.next.next;                          // Move fast two steps
    }

    return slow;                                        // Slow is now at middle node
}


// ===== Helper functions for testing =====

// Convert array -> linked list
function arrayToList(arr) {
    let dummy = new ListNode(0);                       // Dummy node to simplify creation
    let current = dummy;                               // Pointer to build the list
    for (let num of arr) {
        current.next = new ListNode(num);              // Create new node
        current = current.next;                        // Move pointer forward
    }
    return dummy.next;                                 // Return real head
}

// Convert linked list -> array
function listToArray(head) {
    let result = [];                                   // Array to store list values
    while (head) {                                     // Traverse linked list
        result.push(head.val);                         // Add value to array
        head = head.next;                              // Move to next node
    }
    return result;                                     // Return array
}


// ===== Test cases =====

console.log(listToArray(middleNode(arrayToList([1,2,3,4,5]))));      // [3,4,5]  Middle node = 3
console.log(listToArray(middleNode(arrayToList([1,2,3,4,5,6]))));    // [4,5,6]  Second middle = 4
console.log(listToArray(middleNode(arrayToList([1]))));              // [1]      Only one node
console.log(listToArray(middleNode(arrayToList([1,2]))));            // [2]      Two nodes, second is middle
console.log(listToArray(middleNode(arrayToList([1,2,3]))));          // [2,3]    Middle node = 2

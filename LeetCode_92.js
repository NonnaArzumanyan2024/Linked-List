/*
92. Reverse Linked List II - Medium
------------------------------------
Given the head of a singly linked list and two integers left and right where 
left <= right, reverse the nodes of the list from position left to position right, 
and return the reversed list.

Examples:
1. Input: head = [1,2,3,4,5], left = 2, right = 4   -> Output: [1,4,3,2,5]
2. Input: head = [5], left = 1, right = 1           -> Output: [5]
*/


// ===== Definition for singly-linked list =====
function ListNode(val, next) {                          // Constructor function for linked list nodes
    this.val  = (val === undefined ? 0 : val);          // Assign value (default = 0 if not provided)
    this.next = (next === undefined ? null : next);     // Assign next pointer (default = null if not provided)
}


// ===== Iterative solution (one pass) =====
// Time Complexity: O(n)  -> traverse the list once
// Space Complexity: O(1) -> only a few pointers used

function reverseBetween(head, left, right) {
    let dummy = new ListNode(0, head);                 // Create dummy node before head for easier edge handling
    let prev = dummy;                                  // Pointer to node just before sublist to reverse

    for (let i = 0; i < left - 1; ++i) {               // Move prev to node just before left position
        prev = prev.next;                              // Move prev forward
    }

    let current = prev.next;                           // Current points to first node in sublist

    for (let i = 0; i < right - left; ++i) {           // Reverse nodes between left and right
        let temp = current.next;                       // Save next node temporarily
        current.next = temp.next;                      // Remove temp from its position
        temp.next = prev.next;                         // Insert temp right after prev
        prev.next = temp;                              // Connect prev to temp (new front of sublist)
    }

    return dummy.next;                                 // Return new head (skip dummy node)
}



// ===== Helper functions for testing =====

// Convert array -> linked list
function arrayToList(arr) {
    let dummy = new ListNode(0);                       // Dummy node to simplify list creation
    let current = dummy;                               // Pointer to build the list
    
    for (let num of arr) {                             // Iterate through array
        current.next = new ListNode(num);              // Create new node
        current = current.next;                        // Move current forward
    }
    
    return dummy.next;                                 // Return real head (skip dummy)
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

console.log(listToArray(reverseBetween(arrayToList([1,2,3,4,5]), 2, 4)));    // [1,4,3,2,5]   Sublist 2-4 reversed
console.log(listToArray(reverseBetween(arrayToList([5]), 1, 1)));            // [5]           Single node, no change
console.log(listToArray(reverseBetween(arrayToList([1,2,3,4,5]), 1, 5)));    // [5,4,3,2,1]   Reverse entire list
console.log(listToArray(reverseBetween(arrayToList([1,2,3,4,5]), 3, 3)));    // [1,2,3,4,5]   Sublist of length 1, no change
console.log(listToArray(reverseBetween(arrayToList([1,2,3,4,5,6]), 2, 5)));  // [1,5,4,3,2,6] Reverse sublist 2-5
console.log(listToArray(reverseBetween(arrayToList([10,20]), 1, 2)));        // [20,10]       Reverse two-node list


/*
83. Remove Duplicates from Sorted List - Easy

Given the head of a sorted linked list, delete all duplicates such that each element appears only once.
Return the linked list sorted as well.

Examples:
1. Input: head = [1,1,2]       -> Output: [1,2]
2. Input: head = [1,1,2,3,3]   -> Output: [1,2,3]
*/


// ===== Definition for singly-linked list =====

function ListNode(val, next) {                         // Constructor for linked list nodes
    this.val  = (val === undefined ? 0 : val);         // Assign value (default = 0 if not provided)
    this.next = (next === undefined ? null : next);    // Assign next pointer (default = null if not provided)
}


// ===== Iterative solution =====
// Time Complexity: O(n)   -> traverse list once
// Space Complexity: O(1)  -> only a few pointers used

function removeDuplicates(head) {
    let current = head;                                 // Start from head of the list

    while (current && current.next) {                   // Traverse until current or next is null
        if (current.val === current.next.val) {         // If current value equals next value
            current.next = current.next.next;           // Skip next node (remove duplicate)
        } else {
            current = current.next;                     // Move current forward if no duplicate
        }
    }

    return head;                                        // Return modified list
}



// ===== Helper functions for testing =====

// Convert array -> linked list
function arrayToList(arr) {
    let dummy = new ListNode(0);                        // Dummy node to simplify creation
    let current = dummy;                                // Pointer to build the list
    for (let num of arr) {
        current.next = new ListNode(num);               // Create new node
        current = current.next;                         // Move pointer forward
    }
    return dummy.next;                                  // Return real head
}

// Convert linked list -> array
function listToArray(head) {
    let result = [];                                    // Array to store list values
    while (head) {                                      // Traverse linked list
        result.push(head.val);                          // Add value to array
        head = head.next;                               // Move to next node
    }
    return result;                                      // Return array
}


// ===== Test cases =====

console.log(listToArray(removeDuplicates(arrayToList([1,1,2]))));           // [1,2]       Remove duplicate 1
console.log(listToArray(removeDuplicates(arrayToList([1,1,2,3,3]))));       // [1,2,3]     Remove duplicates 1 and 3
console.log(listToArray(removeDuplicates(arrayToList([1,2,3,4,5]))));       // [1,2,3,4,5] No duplicates, list stays same
console.log(listToArray(removeDuplicates(arrayToList([1,1,1,1,1]))));       // [1]         All duplicates removed
console.log(listToArray(removeDuplicates(arrayToList([1,1,2,2,3,3,4,4])))); // [1,2,3,4]   Remove consecutive duplicates

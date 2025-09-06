/*
206. Reverse Linked List - Easy

Given the head of a singly linked list, reverse the list, 
and return the new head.

Examples:
1. Input: head = [1,2,3,4,5]  -> Output: [5,4,3,2,1]
2. Input: head = [1,2]        -> Output: [2,1]
3. Input: head = []           -> Output: []
*/



// ===== Iterative solution =====
// Time Complexity: O(n)  -> we visit each node once
// Space Complexity: O(1) -> we only use a few pointers

function reverseList(head) {
    let prev = null;                                   // Initialize prev pointer to null (will become new tail)
    let current = head;                                // Start from the head of the list

    while (current) {                                  // Traverse the list until current becomes null
        let temp = current.next;                       // Save the next node before breaking the link
        current.next = prev;                           // Reverse the pointer: current now points back to prev
        prev = current;                                // Move prev one step forward (to current)
        current = temp;                                // Move current one step forward (to saved temp)
    }

    return prev;                                       // At the end, prev is the new head of the reversed list
}


// ===== Recursive solution =====
// Time Complexity: O(n)  -> each node is visited once
// Space Complexity: O(n) -> recursive call stack

function reverseListRecursive(head) {
    if (!head || !head.next) return head;              // Base case: empty list or last node, return as is
    
    let newHead = reverseListRecursive(head.next);     // Recursively reverse the rest of the list
    head.next.next = head;                             // Make the next node point back to current node
    head.next = null;                                  // Set current node’s next to null (to avoid cycle)
    
    return newHead;                                    // Return the new head from recursion
}


// ===== Test cases (examples) =====
// Input: [1,2,3,4,5]   -> Output: [5,4,3,2,1]
// Input: [1,2]         -> Output: [2,1]
// Input: []            -> Output: []


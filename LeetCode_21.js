/*
21. Merge Two Sorted Lists - Easy
---------------------------------
Topic: Linked List, Two Pointers

Given the heads of two sorted linked lists, merge them
into a single sorted linked list and return its head.

Examples:
Input:  list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Input:  list1 = [], list2 = []
Output: []

Input:  list1 = [], list2 = [0]
Output: [0]

Complexity:
Time:  O(n + m) -> traverse both lists once
Space: O(1)     -> only pointers used
*/


// Definition for singly-linked list
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

// Helper: build linked list from array
function buildList(arr) {
    let dummy = new ListNode(-1);
    let current = dummy;
    for (let val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummy.next;
}

// Helper: convert linked list to array (for testing)
function listToArray(head) {
    let result = [];
    while (head) {
        result.push(head.val);
        head = head.next;
    }
    return result;
}


// Main function
function mergeTwoLists(list1, list2) {
    let dummy = new ListNode(-1);          // Dummy node (to simplify result building)
    let current = dummy;                   // Pointer to build new list

    while (list1 && list2) {               // Traverse both lists
        if (list1.val < list2.val) {
            current.next = list1;          // attach list1 node
            list1 = list1.next;            // move forward in list1
        } else {
            current.next = list2;          // attach list2 node
            list2 = list2.next;            // move forward in list2
        }
        current = current.next;            // move pointer in result
    }

    current.next = list1 ? list1 : list2;  // Attach remaining nodes (if any)

    return dummy.next;                     // Return merged list head
}


// Test Case 1
let list1 = buildList([1,2,4]);
let list2 = buildList([1,3,4]);
console.log(listToArray(mergeTwoLists(list1, list2)));  // [1,1,2,3,4,4]

// Test Case 2
list1 = buildList([]);
list2 = buildList([]);
console.log(listToArray(mergeTwoLists(list1, list2)));  // [] 

// Test Case 3
list1 = buildList([]);
list2 = buildList([0]);
console.log(listToArray(mergeTwoLists(list1, list2)));  // [0]

// Test Case 4
list1 = buildList([1,3,5,7]);
list2 = buildList([2,4,6,8]);
console.log(listToArray(mergeTwoLists(list1, list2)));  // [1,2,3,4,5,6,7,8]

// Test Case 5
list1 = buildList([5,10,15]);
list2 = buildList([2,3,20]);
console.log(listToArray(mergeTwoLists(list1, list2)));  // [2,3,5,10,15,20]

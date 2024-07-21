import createLinkedList from "./createLinkedList.mjs";

const linkedList = createLinkedList();

// test
console.log(linkedList.size()); // expected: 0

linkedList.append(3);
console.log(linkedList.size()); // expected: 1
linkedList.append(4);
console.log(linkedList.size()); // expected: 2
linkedList.prepend(2);
console.log(linkedList.size()); // expected: 3
linkedList.prepend(1);
console.log(linkedList.size()); // expected: 4

console.log(linkedList.toString());

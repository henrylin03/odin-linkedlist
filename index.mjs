import createLinkedList from "./createLinkedList.mjs";

const linkedList = createLinkedList();

// test
linkedList.append(3);
linkedList.append(4);
linkedList.prepend(2);
linkedList.prepend(1);

console.log(linkedList.toString());

console.log(linkedList.contains(3)); // true
console.log(linkedList.contains(7)); // false

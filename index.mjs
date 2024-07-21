import createLinkedList from "./createLinkedList.mjs";

const linkedList = createLinkedList();

// test
console.log(linkedList.tail().value); // null

linkedList.append(3);
linkedList.append(4);
linkedList.prepend(2);
linkedList.prepend(1);

console.log(linkedList.toString());
console.log(linkedList.tail().value); // expected: 4

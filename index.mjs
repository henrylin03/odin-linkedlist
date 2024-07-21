import createLinkedList from "./createLinkedList.mjs";

const linkedList = createLinkedList();

// test
console.log(linkedList.at(2)); // expect: null

linkedList.append(3);
linkedList.append(4);
linkedList.prepend(2);
linkedList.prepend(1);

console.log(linkedList.toString());

console.log(linkedList.at(2).value); // expect: 3
console.log(linkedList.at(0).value); // expect: 1
console.log(linkedList.at(-1).value); // expect: 4
console.log(linkedList.at(6)); // expect: null + error
console.log(linkedList.at(-5)); // expect: null + error

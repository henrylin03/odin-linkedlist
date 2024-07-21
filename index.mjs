import createLinkedList from "./createLinkedList.mjs";

const linkedList = createLinkedList();

// test
linkedList.append(3);
linkedList.append(4);
linkedList.prepend(1);
linkedList.prepend(2);

console.log(linkedList.toString());
// expected: ( 1 ) -> ( 2 ) -> ( 3 ) -> ( 4 ) -> null

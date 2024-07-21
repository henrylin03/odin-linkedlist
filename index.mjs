import createLinkedList from "./createLinkedList.mjs";

const linkedList = createLinkedList();

// test
linkedList.pop(); // expected: logged message

linkedList.append(3);
linkedList.append(4);
linkedList.prepend(2);
linkedList.prepend(1);

console.log(linkedList.toString());

linkedList.pop();

console.log(linkedList.toString()); // expected: (1) -> (2) -> (3) -> null

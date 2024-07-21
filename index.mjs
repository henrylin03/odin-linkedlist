import createLinkedList from "./createLinkedList.mjs";

const list = createLinkedList();

// test
list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());

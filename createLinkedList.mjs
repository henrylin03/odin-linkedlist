import createNode from "./createNode.mjs";

export default function createLinkedList() {
  let headNode = null;

  // getters
  const head = () => headNode;
  const tail = () => {
    //get tail node
  };
  const size = () => {
    //get length of linked list
  };

  // finder methods
  const at = (idx) => {
    // returns node at given index
  };

  const find = (value) => {
    // retrns idx of node containing value, or null if not found
  };

  const contains = (value) => {
    // returns true if value exists in linked list, otherwise returns false
  };

  // manipulation methods
  const prepend = (value) => {
    const newNode = createNode(value);

    // if list is non-empty, newNode's .nextNode property is the current head node
    if (headNode !== null) newNode.nextNode = headNode;

    headNode = newNode;
  };

  const append = (value) => {
    const newNode = createNode(value);

    // if list is empty, new node is head
    if (headNode === null) return (headNode = newNode);

    let currentNode = headNode;
    // traverse
    while (currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
    }
    currentNode.nextNode = newNode;
  };

  const pop = () => {
    // removes last element of linked list
  };

  const toString = () => {
    let res = "";
    if (headNode === null) return "null"; // empty linkedList

    // traversing
    let currentNode = headNode;
    while (currentNode.nextNode !== null) {
      res += `( ${currentNode.value} ) -> `;
      currentNode = currentNode.nextNode;
    }

    return (res += `${currentNode.nextNode}`);
  };

  const insertAt = (value, idx) => {
    // inserts new node with provided value at given index
  };

  const removeAt = (idx) => {
    // removes node at given idx
  };

  return {
    size,
    head,
    tail,
    append,
    prepend,
    at,
    pop,
    find,
    contains,
    toString,
    insertAt,
    removeAt,
  };
}

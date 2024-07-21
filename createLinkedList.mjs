import createNode from "./createNode.mjs";

export default function createLinkedList() {
  let headNode = null;

  const head = () => headNode;

  const tail = () => {
    if (headNode === null) return null; // empty linked list

    let currentNode = headNode;
    while (currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
    }

    return currentNode;
  };

  const size = () => {
    let count = 0;
    if (headNode === null) return count;

    let currentNode = headNode;
    while (currentNode) {
      count++;
      currentNode = currentNode.nextNode;
    }

    return count;
  };

  /* finders */
  const at = (idx) => {
    // returns node at given index
  };

  const find = (value) => {
    if (headNode === null) return null;

    // else, traverse and find the value and return the idx (which needs to be initialised and tracked)
  };

  const contains = (value) => {
    // returns true if value exists in linked list, otherwise returns false
  };

  /* manipulation methods */
  const prepend = (value) => {
    const newNode = createNode(value);

    // if list is non-empty
    if (headNode !== null) newNode.nextNode = headNode;

    headNode = newNode;
  };

  const append = (value) => {
    const newNode = createNode(value);

    // if list is empty, new node is head
    if (headNode === null) return (headNode = newNode);

    const tailNode = tail();
    tailNode.nextNode = newNode;
  };

  const pop = () => {
    const length = size();

    if (length === 0) return console.log("Linked list is already empty.");
    if (length === 1) return (headNode = null);

    let currentNode = headNode;
    while (currentNode.nextNode.nextNode) {
      currentNode = currentNode.nextNode;
    }
    currentNode.nextNode = null;
  };

  const insertAt = (value, idx) => {
    // inserts new node with provided value at given index
  };

  const removeAt = (idx) => {
    // removes node at given idx
  };

  /* printing */
  const toString = () => {
    let res = "";
    if (headNode === null) return "null"; // empty linkedList

    // traversing
    let currentNode = headNode;
    while (currentNode) {
      res += `( ${currentNode.value} ) -> `;
      currentNode = currentNode.nextNode;
    }

    return (res += `${currentNode}`);
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

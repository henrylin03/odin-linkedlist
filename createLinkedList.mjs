import createNode from "./createNode.mjs";

export default function createLinkedList() {
  let size = 0
  const head = ""; // returns first node in list
  const tail = ""; // returns last node in list

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
  const append = (value) => {
    const newNode = createNode();
    newNode.value = value;

    // if the list is empty, the list is just the node

    // get the last node in the list, and update it's .next pointer to the current node's value
  };

  const prepend = (value) => {
    // add node with value to start of linked list
  };

  const pop = () => {
    // removes last element of linked list
  };

  const toString = () => {
    // print out based on format: ( value ) -> ( value ) => ( value ) -> null
  };

  const insertAt = (value, idx) => {
    // inserts new node with provided value at given index
  };

  const removeAt = (idx) => {
    // removes node at given idx
  };

  return {
    list,
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
  };
}

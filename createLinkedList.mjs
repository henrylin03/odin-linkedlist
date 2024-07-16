import createNode from "./createNode.mjs";

export default function createLinkedList() {
  const list = [];

  // methods
  const append = (value) => {
    // add new node
    const newNode = createNode();
    newNode.value = value;

    // add new node to the end of list
  };

  return { list, append };
}

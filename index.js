console.log("This is a linked list data structure");

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  //Insert first node
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  //insert Last node

  insertLast(data) {
    let node = new Node(data);
    let current;
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }

    this.size++;
  }

  //get at index

  getAt(index) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count === index) {
        console.log(current.data);
      }

      count++;
      current = current.next;
    }
    return null;
  }

  //insert at index

  insertAt(data, index) {
    if (index > 0 && index > this.size) {
      return;
    }

    //if first index

    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const node = new Node(data);
    let current, previous;

    current = this.head;
    let count = 0;

    while (count < index) {
      previous = current;
      count++;
      current = current.next;
    }

    node.next = current;

    previous.next = node;

    this.size++;
  }

  //remove at index

  removeAt(index) {
    if (index > 0 && index > this.size) {
      return;
    }

    let current = this.head;
    let previous;
    let count = 0;

    //remove first

    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }

      previous.next = current.next;
    }
    this.size--;
  }

  //clear list

  clearList() {
    this.head = null;
    this.size = 0;
  }

  //print the list

  printListData() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const ll = new LinkedList();
ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertLast(400);
// console.log(ll);
// ll.insertAt(500, 2);

// ll.getAt(3);

// ll.printListData();
ll.removeAt(1);

ll.clearList();
ll.printListData();

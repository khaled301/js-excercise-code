class Node {
  constructor(data, next = null) {
    this.value = data;
    this.next = next;
  }
}

class LinkedList {

  constructor() {
    this.head = null;
  }

  insertAtStart(data) { 

    let newNode = new Node(data);

    newNode.next = this.head

    this.head = newNode;

    return this.head;

  }

  insertAtEnd(data) {
    let newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      return this.head;
    }

    let tail = this.head;

    while (tail.next !== null) {
      tail = tail.next;
    }
    tail.next = newNode;

    return this.head;

  }


}

let arr01 = [2, 4, 3],
  arr02 = [7, 0, 8],
  list01 = new LinkedList(),
  list02 = new LinkedList();

  list01.insertAtEnd(2);
  list01.insertAtEnd(4);
  list01.insertAtEnd(3);
  list02.insertAtEnd(7);
  list02.insertAtEnd(0);
  list02.insertAtEnd(8);

  list01.insertAtStart(1);

    console.log(list01);
  // console.log(list02);

let addTwoList = function(list01, list02){

  let dummyHead = new Node(0), node = dummyHead;

  let carry = 0, listAVal, listBVal, listSumVal, nextVal;

  while(list01 !== null || list02 !== null) {

    // console.log(typeof list01.value);

    listAVal = (list01 === null)? 0 : list01.value;
    listBVal = (list02 === null)? 0 : list02.value;

    listSumVal = listAVal + listBVal + carry;

    nextVal = listSumVal % 10;

    carry = Math.floor( listSumVal/10 );

    
    node.next = new Node(nextVal);
    node = node.next;

    if(list01 !== null) list01 = list01.next;
    if(list02 !== null) list02 = list02.next; 

  }

  if(carry !== 0){
    node.next = new Node(carry);
  }

  
  return dummyHead.next;

}



//  let result = addTwoList(list01.head, list02.head);

//  console.log(result);





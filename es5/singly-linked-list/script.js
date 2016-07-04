var node = function (value) {
    this.value = value;
    console.log('New Node: ' + this.value);
}

node.prototype.setNext = function (next) {
    this.next = next;
    console.log("Node " + this.value + " linked to node " + next.value)
}

var linkedList = function(){
    this.head = undefined;
    this.tail = undefined;
    this.counter = 0;
    console.log('Linked List Initialized')
} 

linkedList.prototype.addFirst = function (value) {
    if (this.counter) {
        var head = new node(value);
        head.setNext(this.head);
        this.head = head;
    } else {
        this.head = this.tail = new node(value);
    }
    this.counter ++;
}

linkedList.prototype.addLast = function (value) {
    if (this.counter) {
        this.tail.next = this.tail = new node(value);
    } else {
        this.head = this.tail = new node(value);
    }
    this.counter ++;
}

linkedList.prototype.removeFirst = function () {
    if (this.counter) {
        this.head = this.head.next;
        this.counter --;
    } else {
        console.log("Error: nothing to remove!")
    }    
}

linkedList.prototype.removeLast = function () {
    if (this.counter == 1) {
        this.head = this.tail = undefined;
        this.counter = 0;
    } else if (this.counter){
        var node = this.head
        while (node.next.next) {
            node = node.next
        }
        node.next = undefined;
        this.tail = node;
        this.counter --;
    } else {
        console.log("Error: nothing to remove!")
    }
}

linkedList.prototype.enumerate = function () {
    console.log("---------------------------------------")
    console.log("Length: " + this.counter)
    enumNodes(this.head);
} 


function enumNodes(node) {
    while (node !== undefined) {
        console.log(node.value);
        node = node.next;
    }
}

var list = new linkedList();


list.addFirst(6);
list.addFirst(3);
list.addLast(9);

list.enumerate();

list.removeLast();
list.removeFirst();
list.enumerate();

list.removeLast();
list.enumerate();


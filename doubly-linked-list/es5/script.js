var node = function (value) {
    this.value = value;
    this.prev = undefined;
    this.next = undefined;
    console.log('New Node: ' + this.value);
}

var linkedList = function(){
    this.head = undefined;
    this.tail = undefined;
    this.counter = 0;
    console.log('Linked List Initialized')
} 

linkedList.prototype.addFirst = function (value) {
    if (this.counter) {
        this.head.prev = new node(value);
        this.head.prev.next = this.head;
        this.head = this.head.prev;
    } else {
        this.head = this.tail = new node(value);
    }
    this.counter ++;
}

linkedList.prototype.addLast = function (value) {
    if (this.counter) {
        this.tail.next = new node(value);
        this.tail.next.prev = this.tail;
        this.tail = this.tail.next
    } else {
        this.head = this.tail = new node(value);
    }
    this.counter ++;
}

linkedList.prototype.cleanUp = function () {
    this.head = this.tail = undefined;
}

linkedList.prototype.removeFirst = function () {
    if (this.counter) {
        this.head = this.head.next;
        this.counter --;
        if (this.counter) {
            this.head.prev = undefined;
        } else {
            this.cleanUp();
        }
        
        
    } else {
        console.log("Error: nothing to remove!")
    }    
}

linkedList.prototype.removeLast = function () {
    if (this.counter) {
        this.tail = this.tail.prev;
        this.counter --;
        if (this.counter) {
            this.tail.next = undefined;
        } else {
            this.cleanUp();
        }

    } else {
        console.log("Error: nothing to remove!")
    }
}

linkedList.prototype.enumerate = function () {
    console.log("---------------------------------------")
    console.log("Length: " + this.counter)
    enumNodes(this.head);
}

linkedList.prototype.enumerateR = function () {
    var node = this.tail;
    
    console.log("---------------------------------------")
    console.log("Length: " + this.counter)
    while (node) {
        console.log(node.value);
        node = node.prev;
    }
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
list.enumerateR();

list.removeLast();
list.removeFirst();
list.enumerate();

list.removeLast();
list.enumerate();


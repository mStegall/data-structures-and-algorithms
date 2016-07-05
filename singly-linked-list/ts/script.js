var SingleListNode = (function () {
    function SingleListNode(value) {
        this.value = value;
    }
    SingleListNode.prototype.setNext = function (next) {
        this.next = next;
    };
    return SingleListNode;
}());
var SingleLinkedList = (function () {
    function SingleLinkedList() {
        this.head = this.tail = undefined;
        this.counter = 0;
    }
    SingleLinkedList.prototype.addFirst = function (value) {
        if (this.counter) {
            var head = this.head;
            this.head = new SingleListNode(value);
            this.head.setNext(head);
        }
        else {
            this.head = this.tail = new SingleListNode(value);
        }
        this.counter++;
    };
    SingleLinkedList.prototype.addLast = function (value) {
        if (this.counter) {
            this.tail.next = this.tail = new SingleListNode(value);
        }
        else {
            this.head = this.tail = new SingleListNode(value);
        }
        this.counter++;
    };
    SingleLinkedList.prototype.removeFirst = function () {
        if (this.counter) {
            this.head = this.head.next;
            this.counter--;
        }
        else {
            console.log("Error: nothing to remove!");
        }
    };
    SingleLinkedList.prototype.removeLast = function () {
        if (this.counter == 1) {
            this.head = this.tail = undefined;
            this.counter = 0;
        }
        else if (this.counter) {
            var node = this.head;
            while (node.next.next) {
                node = node.next;
            }
            node.next = undefined;
            this.tail = node;
            this.counter--;
        }
        else {
            console.log("Error: nothing to remove!");
        }
    };
    SingleLinkedList.prototype.enumerateList = function () {
        var node = this.head;
        console.log('-------------------------------');
        console.log('Length: ' + this.counter);
        while (node) {
            console.log(node.value);
            node = node.next;
        }
    };
    return SingleLinkedList;
}());
var list = new SingleLinkedList();
list.addFirst(6);
list.addFirst(3);
list.addLast(9);
list.enumerateList();
list.removeLast();
list.removeFirst();
list.enumerateList();
list.removeLast();
list.enumerateList();

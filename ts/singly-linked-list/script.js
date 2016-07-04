var ListNode = (function () {
    function ListNode(value) {
        this.value = value;
    }
    ListNode.prototype.setNext = function (next) {
        this.next = next;
    };
    return ListNode;
}());
var LinkedList = (function () {
    function LinkedList() {
        this.head = this.tail = undefined;
        this.counter = 0;
    }
    LinkedList.prototype.addFirst = function (value) {
        if (this.counter) {
            var head = this.head;
            this.head = new ListNode(value);
            this.head.setNext(head);
        }
        else {
            this.head = this.tail = new ListNode(value);
        }
        this.counter++;
    };
    LinkedList.prototype.addLast = function (value) {
        if (this.counter) {
            this.tail.next = this.tail = new ListNode(value);
        }
        else {
            this.head = this.tail = new ListNode(value);
        }
        this.counter++;
    };
    LinkedList.prototype.removeFirst = function () {
        if (this.counter) {
            this.head = this.head.next;
            this.counter--;
        }
        else {
            console.log("Error: nothing to remove!");
        }
    };
    LinkedList.prototype.removeLast = function () {
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
    LinkedList.prototype.enumerateList = function () {
        var node = this.head;
        console.log('-------------------------------');
        console.log('Length: ' + this.counter);
        while (node) {
            console.log(node.value);
            node = node.next;
        }
    };
    return LinkedList;
}());

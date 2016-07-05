var ListNode = (function () {
    function ListNode(value) {
        this.value = value;
    }
    return ListNode;
}());
var LinkedList = (function () {
    function LinkedList() {
        this.head = this.tail = undefined;
        this.counter = 0;
    }
    LinkedList.prototype.cleanUp = function () {
        this.head = this.tail = undefined;
        this.counter = 0;
    };
    LinkedList.prototype.addFirst = function (value) {
        if (this.counter) {
            this.head.prev = new ListNode(value);
            this.head.prev.next = this.head;
            this.head = this.head.prev;
        }
        else {
            this.head = this.tail = new ListNode(value);
        }
        this.counter++;
    };
    LinkedList.prototype.addLast = function (value) {
        if (this.counter) {
            this.tail.next = new ListNode(value);
            this.tail.next.prev = this.tail;
            this.tail = this.tail.next;
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
            if (this.counter) {
                this.head.prev = undefined;
            }
            else {
                this.cleanUp();
            }
        }
        else {
            console.log("Error: nothing to remove!");
        }
    };
    LinkedList.prototype.removeLast = function () {
        if (this.counter) {
            this.tail = this.tail.prev;
            this.counter--;
            if (this.counter) {
                this.tail.next = undefined;
            }
            else {
                this.cleanUp();
            }
        }
        else {
            console.log("Error: nothing to remove!");
        }
    };
    LinkedList.prototype.enumerateListRev = function () {
        var node = this.tail;
        console.log('-------------------------------');
        console.log('Length: ' + this.counter);
        while (node) {
            console.log(node.value);
            node = node.prev;
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
var list = new LinkedList();
list.addFirst(6);
list.addFirst(3);
list.addLast(9);
list.enumerateList();
list.enumerateListRev();
list.removeLast();
list.removeFirst();
list.enumerateList();
list.removeLast();
list.enumerateList();

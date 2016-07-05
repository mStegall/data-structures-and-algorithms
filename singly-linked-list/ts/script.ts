class SingleListNode {
    value: number
    next: SingleListNode
    constructor(value: number) {
        this.value = value;
    }
    setNext (next: SingleListNode) {
        this.next = next
    }
}

class SingleLinkedList {
    head: SingleListNode
    tail: SingleListNode
    counter: number
    constructor(){
        this.head = this.tail = undefined
        this.counter = 0
    }
    addFirst(value: number){
        if (this.counter) {
            var head = this.head
            this.head = new SingleListNode(value)
            this.head.setNext(head)
        } else {
            this.head = this.tail = new SingleListNode(value)
        }
        this.counter ++;
    }
    addLast(value: number){
        if (this.counter) {
            this.tail.next = this.tail = new SingleListNode(value);
        } else {    
            this.head = this.tail = new SingleListNode(value);
        }
        this.counter ++;
    }
    removeFirst(){
        if (this.counter) {
            this.head = this.head.next;
            this.counter --;
        } else {
            console.log("Error: nothing to remove!")
        }  
    }
    removeLast(){
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
    enumerateList(){
        var node = this.head
        console.log('-------------------------------')
        console.log('Length: ' + this.counter)
        while (node) {
            console.log(node.value)
            node = node.next
        }

    }

}

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

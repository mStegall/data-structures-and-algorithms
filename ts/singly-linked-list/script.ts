class ListNode {
    value: number
    next: ListNode
    constructor(value: number) {
        this.value = value;
    }
    setNext (next: ListNode) {
        this.next = next
    }
}

class LinkedList {
    head: ListNode
    tail: ListNode
    counter: number
    constructor(){
        this.head = this.tail = undefined
        this.counter = 0
    }
    addFirst(value: number){
        if (this.counter) {
            var head = this.head
            this.head = new ListNode(value)
            this.head.setNext(head)
        } else {
            this.head = this.tail = new ListNode(value)
        }
        this.counter ++;
    }
    addLast(value: number){
        if (this.counter) {
            this.tail.next = this.tail = new ListNode(value);
        } else {    
            this.head = this.tail = new ListNode(value);
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

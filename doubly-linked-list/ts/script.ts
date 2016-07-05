class ListNode {
    value: number
    next: ListNode
    prev: ListNode
    constructor(value: number) {
        this.value = value;
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
    cleanUp(){
        this.head = this.tail = undefined
        this.counter = 0
    }
    addFirst(value: number){
        if (this.counter) {
            this.head.prev = new ListNode(value)
            this.head.prev.next = this.head
            this.head = this.head.prev
        } else {
            this.head = this.tail = new ListNode(value)
        }
        this.counter ++;
    }
    addLast(value: number){
        if (this.counter) {
            this.tail.next = new ListNode(value)
            this.tail.next.prev = this.tail
            this.tail = this.tail.next
        } else {    
            this.head = this.tail = new ListNode(value);
        }
        this.counter ++;
    }
    removeFirst(){
        if (this.counter) {
            this.head = this.head.next;
            this.counter --;
            if (this.counter) {
                this.head.prev = undefined
            } else {
                this.cleanUp()
            }
        } else {
            console.log("Error: nothing to remove!")
        }  
    }
    removeLast(){
        if (this.counter) {
            this.tail = this.tail.prev;
            this.counter --;
            if (this.counter) {
                this.tail.next = undefined
            } else {
                this.cleanUp()
            }
        } else {
            console.log("Error: nothing to remove!")
        }  
    }
    enumerateListRev(){
        var node = this.tail

        console.log('-------------------------------')
        console.log('Length: ' + this.counter)

        while (node) {
            console.log(node.value)
            node = node.prev
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

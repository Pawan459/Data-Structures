class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
    }

    insertAtLast(data){
        let node = new Node(data)


        // Our Linked List is Empty
        if(this.head == null){
            this.head = node
        }
        else{
            // We have the data in our linked list

            let currNode = this.head

            while(currNode.next != null){
                currNode = currNode.next
            }

            currNode.next = node
        }
    }

    deleteNode(dataKey){
        let prevNode = null
        let currNode = this.head

        // if we have to delete the data from head

        if(currNode.data == dataKey){
            currNode = currNode.next
            this.head = currNode
            return
        }
        
        while(currNode != null){
            if(currNode.data == dataKey){
                prevNode.next = currNode.next
                return
            }
            prevNode = currNode
            currNode = currNode.next
        }
        
        console.log(`Node With data not found`)
    }

    display(){
        let currNode = this.head

        let linkedList = ''

        while(currNode != null){
            if(currNode.next != null)
                linkedList += currNode.data + ' -> '
            else linkedList += currNode.data

            currNode = currNode.next
        }

        return linkedList
    }
}

linkedList = new LinkedList()

for(let i = 0;i<10;i++){
    linkedList.insertAtLast(i)
}

console.log(linkedList.display())

// from mid
linkedList.deleteNode(2)
console.log(linkedList.display())

// from head
linkedList.deleteNode(0)
console.log(linkedList.display())

// from last
linkedList.deleteNode(9)
console.log(linkedList.display())
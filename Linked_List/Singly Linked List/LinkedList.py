class Node:
    def __init__(self, data):
        self.data = data
        self.next = None
        
class LinkedList:
    def __init__(self):
        self.head = None
        
    def insertAtLast(self, data):
        node = Node(data)
        if self.head == None:
            self.head = node
            return

        currPointer = self.head
        
        while currPointer.next != None:
            currPointer = currPointer.next
        currPointer.next = node
        
    def deleteNode(self, dataKey):
        prevNode = None
        currNode = self.head
        
        # if head element is to be deleted
        if currNode.data == dataKey:
            currNode = currNode.next
            self.head = currNode
            return
        
        while currNode:
            if currNode.data == dataKey:
                prevNode.next = currNode.next
                return
            prevNode = currNode
            currNode = currNode.next
        
        print('Node with data key not found')
        
    def __str__(self):
        result = ''
        currNode = self.head
        while currNode:
            if currNode.next != None:
                result += str(currNode.data) + ' -> '
            else:
                result += str(currNode.data)
            
            currNode = currNode.next
        
        return result
            
            

if __name__ == "__main__":
    linkedList = LinkedList()
    
    for i in range(10):
        linkedList.insertAtLast(i)
        
    print(linkedList)
    
    # Deletion from head
    
    linkedList.deleteNode(0)
    print(linkedList)
    
    # Deletion from mid
    
    linkedList.deleteNode(5)
    print(linkedList)
    
    # deletion from last
    linkedList.deleteNode(9)
    print(linkedList)
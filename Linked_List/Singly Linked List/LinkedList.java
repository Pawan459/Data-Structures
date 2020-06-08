import java.util.*;


class Linked_List{

    private static Scanner sc = new Scanner(System.in);
    
    public static void main(String[] args) {
        
        MyLinkedList linkedlist = new MyLinkedList();
        for(int i = 0;i<10;i++){
            linkedlist.insertAtLast(i);
        }

        System.out.println(linkedlist);

        // Deletion From Head
        linkedlist.deleteNode(0);
        System.out.println(linkedlist);

        // Deletion from mid

        linkedlist.deleteNode(5);
        System.out.println(linkedlist);

        // Deletion from last
        linkedlist.deleteNode(9);
        System.out.println(linkedlist);

        sc.close();
    }
}

class Node{

    int data;
    Node next;

    Node(int data){
        this.data = data;
        this.next = null;
    }
}

class MyLinkedList{

    Node head;

    MyLinkedList(){
        this.head = null;
    }
    

    public void insertAtLast(int data){
        Node insertionNode = new Node(data);

        // if our head is null 
        // No insertion yet
        if(this.head == null){
            // Our current node will be head
            this.head = insertionNode;
        }
        else{
            Node headPointer = this.head;

            while(headPointer.next != null){
                headPointer = headPointer.next;
            }

            headPointer.next = insertionNode;
        }
    }

    public String toString(){
        String result = "";

        Node headPointer = this.head;

        while(headPointer != null){
            if(headPointer.next != null){
                result += headPointer.data + " -> ";
            }
            else{
                result += headPointer.data;
            }
        }

        return result;
    }

    public void deleteNode(int dataKey){
        Node prevNode = null;
        Node currNode = this.head;
        
        // Deletion from head 
        if(currNode.data == dataKey){
            currNode = currNode.next;
            this.head = currNode;
            return;
        }
        // Deletion from other positions
        while(currNode!= null){
            if(currNode.data == dataKey){
                prevNode.next = currNode.next;
                return;
            }
            prevNode = currNode;
            currNode = currNode.next;
        }

        System.out.println("Node with this data not found");
    }

}

// 
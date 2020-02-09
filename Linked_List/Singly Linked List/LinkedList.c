#include <stdio.h>
#include <stdlib.h>
#include <conio.h>

typedef struct node
{
    int data;
    struct node *next;
} node;

typedef struct linkedList
{
    struct node *head;
} linkedList;

node *insertAtLast(node *head, int data)
{
    node *newnode;
    newnode = (node *)malloc(sizeof(node));
    newnode->data = data;
    newnode->next = NULL;
    if (head == NULL)
    {
        return newnode;
    }
    node *currPtr = head;

    while (currPtr->next != NULL)
    {
        currPtr = currPtr->next;
    }

    currPtr->next = newnode;

    return head;
}

void deleteNode(node **head, int dataKey)
{
    node *prevNode = NULL;
    node *currNode = *head;

    if (currNode->data == dataKey)
    {
        node *deleteNode = currNode;
        currNode = currNode->next;
        *head = currNode;
        free(deleteNode);
        return;
    }

    while (currNode != NULL)
    {
        if (currNode->data == dataKey)
        {
            node *deleteNode = currNode;
            prevNode->next = currNode->next;
            free(deleteNode);
            return;
        }

        prevNode = currNode;
        currNode = currNode->next;
    }

    printf("Node with Data Not Found");
}

void display(node *head)
{
    node *currPtr = head;

    while (currPtr != NULL)
    {
        if (currPtr->next != NULL)
            printf("%d -> ", currPtr->data);
        else
            printf("%d", currPtr->data);

        currPtr = currPtr->next;
    }
}

int main()
{
    linkedList ll;
    ll.head = NULL;

    for (int i = 0; i < 10; i++)
    {
        ll.head = insertAtLast(ll.head, i);
    }

    display(ll.head);
    printf("\n");

    // Deletion from head
    deleteNode(&ll.head, 0);
    display(ll.head);
    printf("\n");

    // Deletion from mid
    deleteNode(&ll.head, 5);
    display(ll.head);
    printf("\n");

    // Deletion from last
    deleteNode(&ll.head, 9);
    display(ll.head);
    printf("\n");
    return 0;
}
class Queue {

    // First In First Out

    constructor() {
        this.queue = []
        this.topIndex = -1
    }

    // Push Operation in queue push the element at the first of the queue
    enqueue(dataItem) {
        this.queue.push(dataItem)
        this.topIndex += 1
    }

    // Pop Operation in queue returns the top element of queue

    dequeue() {
        if (this.queue.length == 0) return "queue Underflow Condition"
        this.topIndex -= 1
        return this.queue.shift()
    }

    // Peek Operation returns the top element of queue

    peek() {
        if (this.queue.length == 0) return "queue Underflow Condition"
        return this.queue[0]
    }

    // isEmpty 

    isEmpty() {
        return this.queue.length == 0
    }

    displayQueue() {
        console.log(`Display queue from bottom to top i.e. last to first position`)
        for (let i = 0; i < this.queue.length; i++) {
            console.log(this.queue[i])
        }
    }

}

queueObj = new Queue()

console.log(queueObj.dequeue())
console.log(queueObj.isEmpty())

for (let i = 0; i < 10; i++) {
    queueObj.enqueue(i)
}

queueObj.displayQueue()
console.log(queueObj.dequeue())
console.log(queueObj.isEmpty())
class Stack{

    // Last In First Out

    constructor(){
        this.stack = []
        this.topIndex = -1
    }

    // Push Operation in Stack push the element at the last of the stack
    push(dataItem){
        this.stack.push(dataItem)
        this.topIndex += 1
    }

    // Pop Operation in Stack returns the top element of stack

    pop(){
        if(this.stack.length == 0) return "Stack Underflow Condition"
        this.topIndex -= 1
        return this.stack.pop()
    }

    // Peek Operation returns the top element of stack

    peek(){
        if (this.stack.length == 0) return "Stack Underflow Condition"
        return this.stack[this.topIndex]
    }

    // isEmpty 

    isEmpty(){
        return this.stack.length == 0
    }

    displayStack(){
        console.log(`Display Stack from bottom to top i.e. last to first position`)
        for(let i = 0;i<this.stack.length; i++){
            console.log(this.stack[i])
        }
    }

}

stackObj = new Stack()

console.log(stackObj.pop())
console.log(stackObj.isEmpty())

for (let i = 0; i < 10; i++) {
    stackObj.push(i)
}

stackObj.displayStack()
console.log(stackObj.pop())
console.log(stackObj.isEmpty())
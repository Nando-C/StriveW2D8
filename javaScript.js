// const addConfig = function(){
//     let parentMeta = document.getElementsByTagName('head')[0]
//     let title = document.createElement('title')
//     title.innerText = 'Homework - Day 8'

//     parentMeta.innerHTML = parentMeta.innerHTML + '<meta charset="UTF-8"/>'
//     let meta = document.createElement('meta')
//     meta.name = 'viewport'
//     meta.content = 'width=device-width, initial-scale=1.0'
//     parentMeta.insertBefore(meta, document.getElementsByTagName('style')[0])
//     parentMeta.insertBefore(title, document.getElementsByTagName('style')[0])
// }
// window.onload = function(){
//     addConfig()
// }

/* EXERCISE 5: 
                Add a new task to the list.
                Suggestion:
                - Use document.getElementById to get the UL item and the input text
                - Use the document.createElement to create the new List Item
                - Append the child to the UL
            */
const addNewTask = function(){
    let parentUl = document.getElementById('myTaskList')
    let task = document.getElementById('newTask')
    let newTask = document.createElement('li')
    newTask.classList.add('item')
    newTask.innerText = task.value
    parentUl.appendChild(newTask)
    task.value = ''
}

/* EXERCISE 6: 
                Create a method "removeLast" which removes the last item from the task list
            */
const removeLast = function(){
    let list = document.getElementsByTagName('li')
    if(list[list.length-1]){
        list[list.length-1].remove()
    }
}

 /* EXERCISE 7: 
                Create a method "removeFirst" which removes the first item from the task list
            */
const removeFirst = function(){
    let list = document.getElementsByTagName('li')
    if(list[0]){
        list[0].remove()
    }
}

      /* EXERCISE 8: 
               Create a method "getTasksAsArray" which returns, and prints to the console an array containing the tasks as string
            */
const getTasksAsArray = function(){
    let list = document.getElementsByTagName('li')
    let taskArray =[]
    for(let i=0; i<list.length; i++){
        taskArray.push(list[i].innerText)
    }
    console.log(taskArray)
}

      /* EXERCISE 9:
               Create a method "changeTaskBackgroundColor" which takes the color from the color picker with an 
               onchange event listener ad applies it as background to every list item
            */
const changeTaskBackgroundColor = function(){
    let newColor = document.getElementById('colorPicker').value
    let list = document.querySelectorAll('li')
    for(let i=0; i<list.length; i++){
        list[i].style.backgroundColor = newColor
    }

}
// I am adding in my different input buttons, output window
// The low medium and high selection points, the form itself, and the important check box. 
// I have also added a counter for the javascript logging in console
// I have created a Date object to dynamically display the date
// I have also added an array to dynamically display the info object to the console. 

let input = document.getElementById('input')
let button = document.getElementById('button')
let output = document.getElementById('taskManager')
let low = document.getElementById('low')
let medium = document.getElementById('medium')
let high = document.getElementById('high')
let dropdown = document.getElementById('dropdown')
let form = document.getElementById('taskForm')
let importantBox = document.getElementById('important')
let counter = 0
let date = new Date()
let jsonArray = []


// Adding an event listener to where if you press the add task button, it runs the following code
button.addEventListener('click', function(){
    // Error checking, if not empty, run the following code
    if(input.value != ""){
        // Adding +1 in the counter
        ++counter
        // By default, it automatically reloads, I am getting rid of that
        event.preventDefault()
    
        // I am accessing the forms, and the elements inside the form
        let forms = document.forms.taskForm
        let model = forms.elements.dropdown
    
        // I am creating a div inside of a div to dynamically append
        let taskContainer = document.createElement('div')
        taskContainer.classList.add('task-container')
        
        // Creating a p element for my task input
        let task = document.createElement('p')
        task.textContent = `Task Name: ${input.value}`
    
        // Creating a p element for my priority input
        let priority = document.createElement('p')
        priority.textContent = `Priority: ${model.value}`
    
        // Creating a p element for my date input
        let outputDate = document.createElement('p')
        // Using string concatenation and use of string literals to create the date
        outputDate.textContent = `Date: ${date.getMonth() + 1}` + `/` + `${date.getDate()}`+ `/` + `${date.getFullYear()}`
    
        // Creating an input element for my checkbox
        let checkBox = document.createElement('input')
        // Dynamically changing the type of the input
        checkBox.type = 'checkbox'
        // Dynamically changing the name of the input
        checkBox.name = 'checky'
    
        // Creating a label element for the checkbox
        let label = document.createElement('label')
        label.textContent = 'Done'
        // Connects the label to the checkbox
        label.getAttribute('for', 'checky')
    
        // Creating the jsonObject to be stored in the console
        let jsonObject = {
            id: counter,
            name: input.value,
            priority: model.value,
            isImportant: importantBox.checked,
            isCompleted: false,
            date: `${date.getMonth() + 1}` + `/` + `${date.getDate()}`+ `/` + `${date.getFullYear()}`
        }
        
        // Pushing into the list
        jsonArray.push(jsonObject)
        // Stringifying the list and logging it on console
        console.log(JSON.stringify(jsonArray))
        
        //Event listener to see if the checkbox changed
        checkBox.addEventListener('change', function(){
            // Dynamically changes the isCompleted part of the jsonObject
            jsonObject.isCompleted = checkBox.checked
            // Conditional to add the strikethrough
            if(checkBox.checked){
                taskContainer.style.textDecoration = 'line-through'
            } else{
                taskContainer.style.textDecoration = 'none'
            }
            // Logging after the checkbox change
            console.log(JSON.stringify(jsonArray))
        })
        
        // Creating the button for the deleteButton
        let deleteButton = document.createElement('button')
        deleteButton.textContent = 'Delete'
    
        // Event listener for the deleteButton
        deleteButton.addEventListener('click', function(){
            // Deleting the task container with the info
            taskContainer.remove()
            // Removes it from the array when outputting to console
            jsonArray.pop(jsonObject)
            console.log(JSON.stringify(jsonArray))
        })
        
        // Conditional to check if the important box is checked and setting the color to red
        if(importantBox.checked){
            taskContainer.style.backgroundColor = 'red'
        }
        
        // Appending all the different elements into the task container
        taskContainer.appendChild(task)
        taskContainer.appendChild(priority)
        taskContainer.appendChild(outputDate)
        taskContainer.appendChild(checkBox)
        taskContainer.appendChild(label)
        taskContainer.appendChild(deleteButton)
    
        // Appending the task container to masterdiv
        output.appendChild(taskContainer)
    } else{
        // Automatically refreshes, got rid of that and added window.alert so user knows to add a task name. 
        event.preventDefault()
        window.alert('Please enter a task name')
    }
    
})



let input = document.getElementById('input')
let button = document.getElementById('button')
let output = document.getElementById('taskManager')
let low = document.getElementById('low')
let medium = document.getElementById('medium')
let high = document.getElementById('high')
let dropdown = document.getElementById('dropdown')
let form = document.getElementById('taskForm')

button.addEventListener('click', function(){
    let forms = document.forms.taskForm
    let model = forms.elements.dropdown
    output.textContent = input.value
    let priority = document.createElement('p')
    priority.textContent = `Priority: ${model.value}`
    output.appendChild(priority)
})



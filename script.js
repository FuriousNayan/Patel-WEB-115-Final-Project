let input = document.getElementById('input')
let button = document.getElementById('button')
let output = document.getElementById('taskManager')

button.addEventListener('click', function(){
    output.textContent = input.value
})
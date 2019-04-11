const form = document.getElementsByTagName('form')[0];
const todoList = document.querySelector('.todo-container');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  let todoContent = document.querySelector('input[type="text"]').value;

  todoList.insertAdjacentHTML('beforeend', `<li class="todo"><span class="todo-text">${todoContent}</span><button class="delete">X</button></li>`);
})

todoList.addEventListener('click', function (e) {
  if (e.target.nodeName === 'BUTTON') {
    e.target.parentElement.remove();
  }
})


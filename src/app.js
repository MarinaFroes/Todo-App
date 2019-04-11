const form = document.getElementsByTagName('form')[0];
const todoList = document.querySelector('.todo-container');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  let todoContent = document.querySelector('input[type="text"]').value;

  todoList.insertAdjacentHTML('beforeend', `<li class="todo"><span class="todo-text">${todoContent}</span><button class="far fa-trash-alt delete"></button></li>`);
})

todoList.addEventListener('click', function (e) {
  console.log(e.target.nodeName);
  if (e.target.nodeName === 'BUTTON') {
    e.target.parentElement.remove();
  } else if (e.target.nodeName === 'SPAN' || e.target.nodeName === 'LI') {
    e.target.classList.toggle('done');
  }
})

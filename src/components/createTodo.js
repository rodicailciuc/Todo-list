import checkboxHandler from '../handlers/checkboxHandler.js';
import deleteHandler from '../handlers/deleteHandler.js';
import updateHandler from '../handlers/updateHandler.js';

const createTodo = (todoData) => {
    const container = document.createElement('div');
    container.classList.add('todo');
    container.id = todoData.id;

    // const headTitle = document.createElement('div');
    // headTitle.className = 'head-title';
    // headTitle.innerText = 'Todo List';

    const title = document.createElement('h3');
    title.className = 'title';
    title.innerText = todoData.title;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todoData.completed;

    checkbox.addEventListener('change', () => {
        checkboxHandler(todoData);
    });

    const updateBtn = document.createElement('button');
    updateBtn.className = 'update';
    updateBtn.type = 'button';
    updateBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
    updateBtn.id = todoData.id;

    updateBtn.addEventListener('click', () => {
        updateHandler(todoData.id);
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete';
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';

    deleteBtn.addEventListener('click', () => {
        deleteHandler(todoData.id);
    });

    container.append(title, checkbox, updateBtn, deleteBtn);
    return container;
};

export default createTodo;

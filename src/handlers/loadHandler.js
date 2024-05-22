import dom from '../dom.js';
import getTodos from '../../apis/getTodos.js';
import createTodo from '../components/createTodo.js';

const loadHandler = async () => {
    const todos = await getTodos();
    todos.forEach((todoData) => {
        const todoDom = createTodo(todoData);
        dom.list.append(todoDom);
    });
};

export default loadHandler;

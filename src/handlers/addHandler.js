import dom from '../dom.js';
import addTodos from '../../apis/addTodos.js';

const addHandler = async () => {
    const { value } = dom.input;
    if (!value) {
        return null;
    }

    const todoData = {
        title: value,
        completed: false,
    };
    const res = await addTodos(todoData);
    return res;
};

export default addHandler;

import updateTodo from '../../apis/updateTodo.js';

const checkboxHandler = async (todoData) => {
    const newData = {
        ...todoData,
        completed: !todoData.completed,
    };
    const { id } = todoData;
    await updateTodo(id, newData);
};

export default checkboxHandler;

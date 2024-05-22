import updateTodo from '../../apis/updateTodo.js';

const updateHandler = async (todoData) => {
    const newData = {
        ...todoData,
        completed: !todoData.completed,
    };

    try {
        console.log('Updating todo with new data:', newData); // Debugging log
        const updatedTodo = await updateTodo(todoData.id, newData);
        console.log('Todo updated successfully:', updatedTodo); // Debugging log

        const todoElement = document.getElementById(todoData.id);
        const checkbox = todoElement.querySelector('input[type="checkbox"]');
        checkbox.checked = updatedTodo.completed;
    } catch (error) {
        console.error('Error in updateHandler:', error);
    }
};

export default updateHandler;

import deleteTodos from '../../apis/deleteTodos.js';

const deleteHandler = async (id) => {
    document.getElementById(id).remove();
    await deleteTodos(id);
};

export default deleteHandler;

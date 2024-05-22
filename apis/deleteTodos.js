const deleteTodos = async (id) => {
    try {
        const res = await fetch(`http://localhost:3000/todos/${id}`, {
            method: 'DELETE',
        });
        if (!res.ok) {
            throw new Error(`Failed to fetch todos with status ${res.status}`);
        }
        return await res.json();
    } catch (err) {
        console.error(err);
    }
};

export default deleteTodos;

const addTodos = async (todoData) => {
    try {
        const res = await fetch('http://localhost:3000/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(todoData),
        });
        if (!res.ok) {
            throw new Error(`Failed to fetch todos with status ${res.status}`);
        }
        return await res.json();
    } catch (err) {
        console.error(err);
    }
};

export default addTodos;

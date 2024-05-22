const updateTodo = async (id, newData) => {
    try {
        const res = await fetch(`http://localhost:3000/todos/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newData),
        });

        // const data = await res.json({ message: 'Item updated successfully...' });
        // return data;

        if (!res.ok) {
            throw new Error(`Failed to fetch todos with status ${res.status}`);
        }
        return await res.json();
    } catch (err) {
        console.error('Error updating todo:', err);
        throw err;
    }
};

export default updateTodo;

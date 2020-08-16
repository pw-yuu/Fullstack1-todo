import React, { useEffect, useState } from 'react';
import axios from 'axios';


export default function ListTodos() {

    const [todos, setTodos] = useState([]);

    async function getAllTodos() {
        try {
            const req = await axios.get('/todos');
            const data = await req.data;
            setTodos(data);
        } catch(err) {
            console.error(err.message)
        }
    }

    //delete function
    async function deleteTodo(id) {
        try {
            const deleteTodo = await axios.delete(`/todos/${id}`);
            console.log(deleteTodo)

            setTodos( todos.filter( todo => todo.id !== id));
        } catch(err) {
            console.error(err.message)
        }
    }

    useEffect(() => {
            getAllTodos();
    }, [todos]);

    return<>
        <h1 className="text-center mt-5">List todos</h1>
        <table className ="table mt-5 text-center">
            <thead>
                <tr>
                    <th>Description</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {todos.map(todo => (
                    <tr key={todo.id}>
                        <td >{todo.description}</td>
                        <td><button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}>Delete</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>
}
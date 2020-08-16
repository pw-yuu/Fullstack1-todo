import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function InputTodo() {

    const [description, setDescription] = useState("");

    async function onSubmitForm() {
        try{
            const res = await axios.post('/todos/add', {
                description
            })
            console.log(res);
            console.log(res.data)


        } catch (err) {
            console.error(err.message);
        }
    }

    return (
        <>
            <h1 className="text-center mt-5">Input Todo</h1>
            <div className="d-flex mt-5">
                <input type="text" className="form-control" value={description} onChange={e => {setDescription(e.target.value)}}/>
                <button className="btn btn-success" onClick={onSubmitForm}>Add</button>
            </div>
        </>
    )
}
require('dotenv').config();
const express = require('express');
const app = express();
const db = require('./knex')

app.use(express.static(__dirname + "dist"));

const PORT = process.env.PORT || 4000

//middleware
app.use(express.json());

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})

app.get('/todos', async (req, res) => {
    try {
        const todos = await db.select().table('todos');
        res.json(todos);
    } catch (err) {
        console.log('error loading todos!', err);
        res.sendStatus(500);
    };
});

app.get('/todos/:id', async (req, res) => {
    try {
        await db('todos').where({id: req.params.id});
        res.sendStatus(200);
    } catch (err) {
        console.log('error getting todo', err);
        res.sendStatus(500);
    }
})

app.post('/todos/add', async (req, res) => {
    try {
        await db('todos').insert(req.body);
        console.log('succeed');
        res.sendStatus(200);
    } catch (err) {
        console.log('error adding todo!', err);
        res.sendStatus(500);
    }
});

app.put('/todos/:id', async (req, res) => {
    try {
        await db('todos').where({id: req.params.id}).update(req.body)
        res.sendStatus(200);
    } catch (err) {
        console.log('error updating todo!', err);
        res.sendStatus(500);
    }
})

app.delete('/todos/:id', async (req, res) => {
    try {
        await db('todos').where({id: req.params.id}).del();
        console.log('success');
        res.sendStatus(200);
    } catch (err) {
        console.log('error deleting todo', err);
        res.sendStatus(500);
    };
});
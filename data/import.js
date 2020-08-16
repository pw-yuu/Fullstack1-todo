require('dotenv').config();
const fs = require('fs');
const db = require('../server/knex.js');

(async () => {
    try {
        const todos = JSON.parse(fs.readFileSync('./data/todos.json'));
        for (const todo of todos) {
            const description = todo.description;
            const result = await db('todos').insert({
                description
            });
        }
    } catch (err) {
        console.log('error inserting records', err)
    }
})();
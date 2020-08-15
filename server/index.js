const express = require('express');
const app = express();

app.use(express.static(__dirname + "dist"));

const PORT = process.env.PORT || 4000

//middleware
app.use(express.json());

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})

app.use('/api', (req, res) => {
    res.send('Hey 🦄')
})


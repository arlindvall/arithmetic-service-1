// require('dotenv').config()
// const express = require('express');
// const cors = require('cors');
// const {add} = require("./arithmetica")
// const app = express();
// app.use(cors());

// const port = process.env.PORT || 3000;

// app.use(express.static('public'));

// app.get('/add/:num1/:num2', (req, res) => {
//     const num1 = parseInt(req.params.num1);
//     const num2 = parseInt(req.params.num2);
//     const sum = num1 + num2;
//     res.json({ sum });
// });

// app.listen(port, () => {
//     console.log(`Arithmetic service running on http://localhost:${port}`);
// });
require('dotenv').config()
const express = require('express');
const cors = require('cors');
const { add } = require("./arithmetica");
const app = express();
app.use(cors());

if (!process.env.PORT) {
    throw new Error('Please specify the port number for the HTTP server with the environment variable PORT.');
}

const port = process.env.PORT;
app.get('/', (req, res) => {
    res.send('Arithmetic service - last updated 3/4/2022');
});
app.get('/add/:n/:m', (req, res) => {
    let n = Number(req.params.n);
    let m = Number(req.params.m);
    let sum = add(n, m);
    res.json(sum);
});

app.listen(port);
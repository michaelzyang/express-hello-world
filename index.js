const express = require('express');
const app = express();
const PORT = 8654;

// Define middleware
app.use(express.json());   // JSON parsing middleware.

// Define app port and starting callback
app.listen(
    PORT,
    () => console.log(`Hello world from port ${PORT}`)
)

// Define routes
app.get('/secret', (req, res) => {
    res.status(200).send({
        "foo": 'bar',
    })
});
// curl -localhost:8654/secret

app.post('/secret/:word', (req, res) => {
    const { word } = req.params;
    const { hint } = req.body;

    if (!hint) {
        res.status(418).send({ message: 'please provide a secret hint' });
    }
    res.send({
        "secret": word,
        "hint": hint,
    })
});
// curl -X POST localhost:8654/secret/harry -H 'Content-Type: application/json' -d '{"hint":"potter"}'
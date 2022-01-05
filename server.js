const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to the updated homepage');
});

const port = process.env.port || 3000;
app.listen(port, () => {
    console.log('listening on port: ' + port);
});
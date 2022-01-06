const express = require('express');
const app = express();
const http = require('http');
const fs = require('fs');

app.get('/', (req, res) => {
    res.writeHead(200, { 'content-type': 'text/html' })
    fs.createReadStream('index.html').pipe(res)
});

const port = process.env.port || 3000;
app.listen(port, () => {
    console.log('listening on port: ' + port);
});
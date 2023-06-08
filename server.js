const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/',(_req,res) => {
        res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/another-route',(_req,res) => {
        res.sendFile(path.join(__dirname, '/another-index.html'));
});

app.get('/third-route',(_req,res) => {
    res.sendFile(path.join(__dirname, '/another-index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});
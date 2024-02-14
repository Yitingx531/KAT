"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const path = require('path');
const app = express();
const PORT = 4000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('dist'));

// app.get('/', (req, res) => {
//     console.log('inside of server');
//     return res.status(200).sendFile(path.resolve(__dirname, '../src/static/index.html'));
// });

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});

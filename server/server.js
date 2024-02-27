"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const path = require('path');
const app = express();
const PORT = 4000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, '../dist')));

app.use(express.static(path.resolve(__dirname, './src/static/tempImages')));
app.get('/', (req, res) => {
    return res.status(200).sendFile('../index.html');
});

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});

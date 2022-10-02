const express = require('express');
const upload = require('express-fileupload');
const { json } = require('express');
const FileHandlerController = require('./src/file_handler/file_handler.controller');
const app = express();

app.use(json());
app.use(upload());
app.get('/', (_, res) => res.send('simple file uploader'));

app.use('/files', FileHandlerController);
// export 'app'
module.exports = app;

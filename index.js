const express = require('express');
const { json } = require('express');
const FolderHandlerController = require('./src/folder_handler/folder_handler.controller');
const app = express();

app.use(json());

app.get('/', (_, res) => res.send('simple file uploader'));
app.use('/folders', FolderHandlerController);
// export 'app'
module.exports = app;

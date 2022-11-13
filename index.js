const express = require("express");
const upload = require("express-fileupload");
const cors = require("cors");
const { json } = require("express");
const FileHandlerController = require("./src/file_handler/file_handler.controller");
const app = express();

var corsOptions = {
  origin: "*",
};

app.use(json());
app.use(cors(corsOptions));
app.use(upload());
app.get("/", (_, res) => res.send("simple file uploader"));

app.use("/files", FileHandlerController);

app.get("/form", (req, res) => {
  res.send(`
    <form action="/files/upload" enctype="multipart/form-data" method="post">
      <input type="file" name="file">
      <input type="submit" value="Upload">
    </form>`);
});
// export 'app'
module.exports = app;

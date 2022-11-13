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

app.get("/form", (req, res) => {
  res.send(`
    <form action="/upload" enctype="multipart/form-data" method="post">
      <input type="file" name="file">
      <input type="submit" value="Upload">
    </form>`);
});

app.use("/files", FileHandlerController);
// export 'app'
module.exports = app;

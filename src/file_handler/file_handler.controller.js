const { Router } = require("express");
const FileHandlerService = require("./file_handler.service");
const FileDto = require("./models/file.model");

const router = Router();

router.post("/upload", async (req, res) =>
  res.send(await FileHandlerService.uploadFile(req))
);

router.get("/", async (req, res) =>
  res.json(await FileHandlerService.listFiles(req.params.foldername))
);

router.get("/download/:filename", async (req, res) => {
  res.setHeader("content-type", "application/json");
  res.send(FileHandlerService.downloadFile(req.params.filename));
});

module.exports = router;

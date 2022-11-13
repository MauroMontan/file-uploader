const { Router } = require("express");
const FileHandlerService = require("./file_handler.service");

const router = Router();

router.post("/upload", (req, res) =>
  res.send(FileHandlerService.uploadFile(req))
);

router.get("/", async (req, res) =>
  res.json(await FileHandlerService.listFiles(req.params.foldername))
);

router.get("/download/:filename", async (req, res) => {
  res.send(await FileHandlerService.downloadFile(req.params.filename));
});

module.exports = router;

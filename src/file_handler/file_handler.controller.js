const { Router } = require('express');
const FileHandlerService = require('./file_handler.service');

const router = Router();

router.post('/:foldername/:filename', async (req, res) => res.json(await FileHandlerService.uploadFile(req)));

router.get('/:foldername', async (req, res) => res.json(await FileHandlerService.listFiles(req.params.foldername)));

module.exports = router;

const { Router } = require('express');
const FileHandlerService = require('./file_handler.service');

const router = Router();

router.post('/:foldername', async (req, res) => res.json(await FileHandlerService.uploadFile(req)));

module.exports = router;

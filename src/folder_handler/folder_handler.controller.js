const { Router } = require('express');

const FolderHandlerService = require('./folder_handler.service');

const router = new Router();

router.post('/', async (req, res) => res.json(await FolderHandlerService.createFolder(req.body)));

module.exports = router;

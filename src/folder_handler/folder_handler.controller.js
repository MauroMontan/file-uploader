const { Router } = require('express');

const FolderHandlerService = require('./folder_handler.service');

const router = new Router();

router.post('/', async (req, res) => res.json(await FolderHandlerService.createFolder(req.body)));

router.get('/', async (_, res) => res.json(await FolderHandlerService.getFolders()));

router.get('/:name', async (req, res) => res.json(await FolderHandlerService.getFolder(req.params.name)));

module.exports = router;

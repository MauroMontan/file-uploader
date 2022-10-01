
const FolderHandlerService = require('../folder_handler.service');

const mockFolder = {
  name: 'dogs',
  key: 'ezaza0zvb9co',
  createdAt: '2022-10-01T21:13:58.955Z'
};

describe('Service test ', () => {

  it('Should be defined', async () => {
    expect(FolderHandlerService).toBeDefined();

  });

  it('Should createa new folder', async () => {
    jest.spyOn(FolderHandlerService, 'createFolder').mockResolvedValue(mockFolder);
    expect(await FolderHandlerService.createFolder(mockFolder)).toBe(mockFolder);

  });

});

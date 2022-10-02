# File Uploader 

![deployment status](https://github.com/MauroMontan/file-uploader/actions/workflows/deploy.yml/badge.svg) 


## Try it 

Use the Deta button to deploy the application in your deta environment.

> See Endpoint section to try it.

[![Deploy](https://button.deta.dev/1/svg)](https://go.deta.dev/deploy?repo=https://github.com/MauroMontan/file-uploader)


### Run Project locally

You need to create a .env file with the following:
  
  ```
  LOCALPORT=3030 # Put your preferred port

  PROJECT_KEY="here goes your key" # Very import to make deta drive work!

  ROOT_FOLDERNAME="default" # this is were all your subfolder will be stored
  
  ```

- Once you have created your .env file with the properly values install all de dependencies.

  `npm install` 

- Run the local mode with:
  
  `npm run start:dev` 


### Endpoints

For now there are two endpoints, one for upload a file, and other one for listing all the files

| Name         |Type |   Endpoint                                             |
|--------------|---- | ------------------------------------------------------ |
| Upload file  |POST |  http://localhost:{PORT}/files/{FOLDERNAME}/{FILENAME} |
| List files   |GET  |  http://localhost:{PORT}/files/                        |


IMPORTANT: for uploading a file your input tag has to have "file" in the name field. Example.

  ```
    <input name="file" type="file" />
  
  ```
> for more information read express-fileupload [docs](https://www.npmjs.com/package/express-fileupload) 


### CI/CD 

- This project is using the [deta deploy action](https://github.com/BogDAAAMN/deta-deploy-action) for a better deployment. Check the deploy  workflow file to see how is implemented for this project.

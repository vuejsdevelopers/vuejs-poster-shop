# Ultimate Vue.js Developers Course

Source code for the [Ultimate Vue.js Developers Course](http://bit.ly/2mPK8ny).

### Project 1: Vue.js Poster Shop

#### Demo

See the completed project here: [http://vuejs-poster-shop.vuejsdevelopers.com/](http://vuejs-poster-shop.vuejsdevelopers.com/)

#### Pre-installation

1. Ensure [Node.js  >=6.4](https://nodejs.org/en/download/), [NPM](https://docs.npmjs.com) and [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) are installed on your system
2. Register Oauth 2 access to the [Imgur API](https://api.imgur.com/oauth2/addclient).

    Register for OAuth 2 authorization without a callback URL. You can name your application anything you like and you don't need a callback URL. The important thing is that you get a *client ID*. 

#### Installation

1. Install this code on your local system
     
    1. Fork this repository (click 'Fork' button in top right corner)
    2. Clone the forked repository on your local file system
    
        ```
        cd /path/to/install/location
        
        git clone https://github.com/[your_username]/vuejs-poster-shop.git
        ```

2. Change directory into the local clone of the repository

    ```
    cd vuejs-poster-shop
    ```

3. Install dependencies

    ```
    npm install
    ```

4. Create a `.env` file by copying the sample

    ```
    cp .env_sample .env
    ```
    
    Or for Windows:
    
    ```
    copy .env_sample .env
    ```
    
    Now edit the *.env* file and replace the `IMGUR_CLIENT_ID` with the client ID provided in the pre-installation
    
5. Start project

    ```
    npm run start
    ```

6. Your site will be available at *localhost:[PORT]* where `PORT` is whatever value is set in your `.env` file.

#### Lecture branches

Note that branches in the repo named `lecture/xxx` correspond to course lectures.

#### It's not working!

Here are some common mistakes people make, check these before filing an issue:

- `ENOENT: no such file or directory, open '.env'`. You forgot to make a *.env* file. See step 3.
- `EADDRINUSE :::3000`. You already have another application using port 3000. Either end it, or change your port to something else in the *.env* file to resolve the conflict e.g. `3001`
- `Error: Request failed with status code 403`. You didn't create an Imgur API key, or didn't paste it into your *.env* file. See pre-installation step 2.
- Ensure you have a version of Node >= 6.4

```
node -v
```

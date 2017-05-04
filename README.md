# Ultimate Vue.js Developers Course

Source code for the [Ultimate Vue.js Developers Course](http://bit.ly/2mPK8ny).

### Project 1: Vue.js Poster Shop

#### Demo

See the completed project here: [http://vuejs-poster-shop.vuejsdevelopers.com/](http://vuejs-poster-shop.vuejsdevelopers.com/)

#### Pre-installation

1. Ensure [NPM](https://docs.npmjs.com) and [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) are installed on your system
2. Register Oauth 2 access to the [Imgur API](https://api.imgur.com/oauth2/addclient).

    Register for OAuth 2 authorization without a callback URL. You can name your application anything you like and you don't need a callback URL. The important thing is that you get a *client ID*. 

#### Installation

1. Install this code on your local system
 
    **Option 1 (recommended)**
    
    1. Fork this repository (see top right corner)
    2. Clone the forked repository on your local file system
    
        ```
        cd /path/to/install/location
        
        git clone git@github.com:[your_username]/vuejs-poster-shop.git
        ```
    
    **Option 2 (easier)**
    
    This option is better if you're not a Github user or are not sure how to setup SSH keys
    
    ```
    cd /path/to/install/location
    
    git clone https://github.com/vuejsdevelopers/vuejs-poster-shop.git
    ```  

2. Install dependencies

    ```
    npm install
    ```

3. Create a `.env` file by copying the sample

    ```
    cp .env_sample .env
    ```
    
    Now edit the .env file and replace the `IMGUR_CLIENT_ID` with the client ID provided in the pre-installation
    
4. Start project

    ```
    npm run start
    ```

5. Your site will be available at *localhost:[PORT]* where `PORT` is whatever value is set in your `.env` file.

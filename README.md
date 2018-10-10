# Compose mail

I went through the given task and identify the solution which is included in this repository.
It developed in following ways:
  1.FRONT-END:
    
    react.js
    HTML
    CSS
    bootstrap
  
  2.BACK-END:
  
    node.js 
    sendgrid
    
  
# REQUIREMENTS:
# Clone the repository
git clone https://github.com/AkashJugnu/Compose-mail

# Go inside the directory
cd Compose-mail

# Install dependencies
  
    node.js
    npm install
  
  copy the api key to index.js in server folder
  
  start the server using node index.js in terminal 
  and open your favorate browser and run localhost:7000
  and than fill the email-id of recipient provided by subject and body of the mail, than click on send message and your mail is   now send to the recipient.


# DOCUMENTATION
# Folder Structure
All the source code will be inside src directory. Inside src, there is client and server directory. All the frontend code (react, css, js and any other assets) will be in client directory. Backend Node.js code will be in the server directory.

# Babel
Babel helps us to write code in the latest version of JavaScript. If an environment does not support certain features natively, Babel will help us to compile those features down to a supported version. It also helps us to convert JSX to Javascript.

.babelrc file is used describe the configurations required for Babel. Below is the .babelrc file which I am using.

    {
      "presets": ["env", "react"]
    }
Babel requires plugins to do the transformation. Presets are the set of plugins defined by Babel. Preset env allows to use babel-preset-es2015, babel-preset-es2016, and babel-preset-es2017 and it will transform them to ES5. Preset react allows us to use JSX syntax and it will transform JSX to Javascript.

# Webpack
Webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser.

webpack.config.js file is used to describe the configurations required for webpack. Below is the webpack.config.js file which I am using.

# Webpack dev server
Webpack dev server is used along with webpack. It provides a development server that provides live reloading for the client side code. This should be used for development only.

# nodemon
Nodemon is a utility that will monitor for any changes in the server source code and it automatically restart the server. This is used in development only.

# Express
Express is a web application framework for Node.js. It is used to build our backend API's.

# Concurrently
Concurrently is used to run multiple commands concurrently. I am using it to run the webpack dev server and the backend node server concurrently in the development environment.



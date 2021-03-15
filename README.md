# nodejs-playground

This repo is a sample NodeJS project where you can experiment with different NodeJS APIs and hack away at your will.


## Information
In the most simplest of form, a NodeJS app consists of a `package.json` file and an entrypoint JS file. Running a NodeJS app is as simple as running the command `node your_file.js`. 

That entrypoint file then provides a way to modularize your code by importing modules that you write yourselves, or third-party modules that you install using npm.


### Getting started
Please read the [official quickstart](https://nodejs.dev/learn) guide.


## Setup
```bash
# install dependencies
npm i

# start project
npm start
```

#### A note on the NodeJS module system
[This link](https://masteringjs.io/tutorials/node/import-vs-require) is a good source of information on CommonJS and ESM modules in a Node app. Node does not natively support import/export from the ES6 standard (experimental at the moment), so if you do indeed use import/export statments in code, a bundler (such as Babel) will most likely be outputting CommonJS statments.

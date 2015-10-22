JavaScript full stack technical test
====================================

About
-----

This repository is a home for following Angular assignments.

 * hotels directory
 * single bill page

Launching Application
-------------------

### Environment prequisites

To clone application you will need [git](http://git-scm.com/) installed. If you have git already cd into your worspace folder and clone the project with following command:

```
git clone git@github.com:indieforger/hotels-app.git
```

To run the application, you will need NodeJS along with its few of dependencies.
To install node locally follow instructions from their official site [node](https://nodejs.org).

NodeJS comes with NPM (Node Package Manager). 
Use it to install all dependencies required to run the application.  

Use `npm install` command with `-g` flag to install required global dependencies.
```
npm install -g grunt gunt-cli
```

Then `cd` into `./client` folder and install all local node dependencies executing
```
npm install
```

### Launching Application

From inside of `./client` folder execute `grunt-dev` command to launch application browser in development mode.
Development mode skips concatenating scripts.

If you want to build web app and launch it in the browser simply execute `grunt`. 
It will build the application and start it in your system default web-browser.

Development
-----------

### Application bootstrap
Foundation for Hotels Web App was [angular-seed](https://github.com/angular/angular-seed),
as it comes with pre-configured bootstrap. 

### Setting up dev environment
Setting up development environment involves installing [gruntjs](http://gruntjs.com/) 
with CLI option and configuring it to automate builds, open application in default browser 
and auto-reload when changes occur on *.js, *.css and *.html source files.  

### Next steps
 * Results pagination or infinite scrolling
 * Unit tests with Karma
 * Integration tests with Protractor 
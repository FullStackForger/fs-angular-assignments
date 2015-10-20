JavaScript full stack technical test
====================================

About
-----

This repository is a quick exercise I was given to do during interview process
for one of London based companies. 

Main task is to create a web page preseting [hotels.json](hotels.json) data with
some filtering and sorting functionality, in accordance to modern web-standards.
You can find orginal instructions [here](instructions/README.md).

### Client requirements

#### Filtering data by:

* Name
* Stars
* TrpRating
* UserRating
* MinCost

#### Sorting data by:

* Distance
* Stars
* MinCost
* TrpRating
* UserRating

#### Things to consider

* Performance
* Efficient use of space
* Usability
* Cross-browser 
* Responsiveness

#### Example hotel data

```json
{
    "Distance": 33.87980170538988,
    "EstablishmentId": 374848,
    "EstablishmentType": "Hotel",
    "Location": "Disneyland Paris",
    "MinCost": 588,
    "Name": "Vienna International Dream Castle Hotel",
    "Stars": 4,
    "UserRating": 8,
    "UserRatingTitle": "Great",
    "UserRatingCount": 648,
    "ImageUrl": "https://i.t-rp.co.uk/ei/3/7/4/8/4/8/0_400_400.jpg",
    "ThumbnailUrl": "https://i.t-rp.co.uk/ei/3/7/4/8/4/8/0_80_80.jpg"
},
```

Launching Application
-------------------

### Environment prequisites

To clone application you will need [git](http://git-scm.com/) installed. If you have git already cd into your worspace folder and clone the project with following command:

```
git clone git@github.com:indieforger/hotels-app.git
```

Next, to run Hotel App, you will need [node](https://nodejs.org) along with its few of dependencies. 

You should use `npm install` command with `-g` flag to install required global dependencies.
```
npm install -g grunt gunt-cli
```

Then `cd` into `./client` folder and install all local node pacakages executing

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
Foundation for Hotels Web App was [angular-seed](https://github.com/angular/angular-seed), with comes with pre-configured setup

### Setting up dev environment
Setting up development environment involves installing [gruntjs](http://gruntjs.com/) with CLI option and configuring it to automate builds, open application in default browser and auto-reload when changes occur on *.js, *.css and *.html files.  

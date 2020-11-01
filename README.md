# E-commerce database
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of content

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Tests](#tests)
* [License](#license)
* [Questions](#questions)


## Description

This is application is a database program for an online e-commerce. All the interaction with the database can be achieved using request API. This include getting, adding, editing and deleting information on the database, such as products, tag and category.

This application ulilized [express](https://www.npmjs.com/package/express) to create the API server, as well as [sequelize](https://www.npmjs.com/package/sequelize) to interact with SQL database. Currently the program is running on MySQL dialect.

## Installation

To use this application, it's required to have [node.js](https://nodejs.org/en/download/) and [mySQL](https://www.mysql.com/downloads/) installed.

Once you have cloned the files, run the install command in the terminal:
 
    npm install

Next, you'll need to create a .env enviroment file in your root directory with the following information:

    DB_NAME='ecommerce_db'
    DB_USER='root'
    DB_PW= <your MySQL password>

With that, your program is ready to go

## Usage

Please check out this [YouTube video](https://www.youtube.com/watch?v=zQnwOFLpgJc) for a live demonstration of this program.

First you must initialize your database by running the following code in MySQL terminal

    source db/schema.sql

For the API end points as well as the fields required, please refer to the video for more infomation

## Tests

The program has a built-in code to seed the database for your testing:

    npm run seed

After running the code, you should have a database to test, it's highly recommended to use [Insomnia Core](https://insomnia.rest/download/) to test the APIs

## License

This program is covered under MIT License

## Questions

GitHub link: https://github.com/MeeMofu



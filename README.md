# E-commerce-Back-End

## Table of Contents 
- Table of Contents 
- Description
- User Story
- Acceptance Criteria
- Installation
- Use
- Contributers 

## Description 
This is an app that utilizes mysql database and seqelize 

## Acceptance Criteria 
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database

## Installation
Terminal Commands: npm i 

## Use
Terminal Commands: 

mysql -u root -p 
source db/schema.sql
quit

npm run seed
node server.js

## Contributers
Eliceo Soto 
https://github.com/eli-soto/E-commerce-Back-End

## Video
[Untitled_ Jan 24, 2024 3_42 PM.webm](https://github.com/eli-soto/E-commerce-Back-End/assets/142184979/f69e0edb-354c-483d-8b0f-b8613ecf856a)

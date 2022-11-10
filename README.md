# E-Commerce Back End 
Video Link to Walkthrough: https://drive.google.com/file/d/14ap5ckesZWNXjFP8Elue6jsXPklQAu1Y/view

## Description 
This application serves an e-commerce website's backend. It is used to get information on products, categories, and tags. It also allows the user to update the database by adding new products, cateogries, or tags or deleting any one item in those three cases. 

## Table of Contents

[Installation](#installation)
[Usage](#usage)
[Future Iterations](#future-iterations)
[License](#license)

## Installation 
In order for this application to work, the user will need to install the <a href="https://www.npmjs.com/package/mysql2">MySQL2</a> and <a href="https://www.npmjs.com/package/sequelize">Sequelize</a> packages to connect the Express.js API to the mysql database. The user will also need to install <a href="https://www.npmjs.com/package/dotenv">dotenv</a> to hide sensitve information like the database password.

## Usage
Video Link to Walkthrough: https://drive.google.com/file/d/14ap5ckesZWNXjFP8Elue6jsXPklQAu1Y/view
<br>
First, the user will open the terminal and navigate to the application. <br>
Then, the user will run mysql2 using either the command: 

 > % mysql -u root

or

> % mysql -u root -p 

if there is no set password or a set password, respectively. This will create the database. <br>
Once it is confirmed that the database is created and in use, the user will seed the database using the command:

 > % npm run seed

 or 

 > % node seeds/index.js. 

After the database is seeded, the user can exit mysql using the command: 

 > % quit

The user can then interact with the application through the API routes to GET, POST, PUT, and DELETE items from categories, products, and tags. This is possible using <a href="https://insomnia.rest/download">insomnia</a> or navigating to the browser and typing the following into the searchbar. Both insomnia and the brower use the same syntax:

 > localhost:3001/api/

followed by the path that the user wishes to test (products, tags, or categories). An example search would look like the following:

 > localhost:3001/api/categories

to get one category by id (example case is id: 1):

 > localhost:3001/api/categories/1

Once the user is done interacting with the database, all changes will persist. 


## Future Iterations 
Future versions of this application will include front end in order to make it a functioning full stack application. 

## License 
[MIT](https://choosealicense.com/licenses/mit/) 
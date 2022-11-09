# E-Commerce Back End 

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
First, the user will open the terminal and navigate to the application. 
Then, the user will run mysql2 using the command __% mysql -u root__ if there is no password set or __% mysql -u root -p__ if there is a set password. This will create the database. 
Once it is confirmed that the database is created and in use, the user will seed the database using the command __% npm run seed__ or __% node seeds/index.js__. 


## Future Iterations 
Future versions of this application will include front end in order to make it a functioning full stack application. 

## License 
[MIT](https://choosealicense.com/licenses/mit/) 
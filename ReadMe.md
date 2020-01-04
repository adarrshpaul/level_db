Simple implementation of Level DB
The level db has a module called level-sublevel, you need to install it before importing it through require method.
To integrate level-db with Indexed-db use db: require('level-sublevel'), into the area where you have defined sublevel, and level .
The sublevel is a database within a database.
use budo to host the server into localhost:9966, which is by default
change the start script in the package.json to budo server.js
You had to install budo to use budo.
You need to install level-js.
For other dependencies refer the package.json file.

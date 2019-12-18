var level = require('level');
var sublevel =require('level-sublevel');
var db = sublevel(level('./db',{db :require('level-js'),valueEncoding:'json'}));
// db.put('animal','bear',function(err){
//     //This point animal equals db
// })
// db.get('animal',function(err,animal){
//     console.log(animal);
// })
// db.del('animal',function(err){
//     db.get('animal',function(err,animal){
//         console.log(animal);
//     })
// })
// db.put('animal',{ type:'grizzly', name:'steve'},function(err){
//     db.get('animal',function(err,animal){
//         console.log(animal.name);
//     })
// })


var bearsdb = db.sublevel('bears');
var regionsdb = db.sublevel('regions');

regionsdb.put('northamerica', {name: 'North America'},function(err){
    bearsdb.put('steve',{type:'grizzly',region:'northamerica'},function(){

    
    })
 })
regionsdb.get('northamerica',function(err,northamerica){
    console.log(northamerica);
})
var bears =[];
var stream = bearsdb.createReadStream();
stream.on('data',function(bear){
    regionsdb.get(bear.value.region,function(err,region){
        bear.value.region = region;
        bears.push(bear.value);
    })
})
stream.on('close',function() {
    console.log(bears);
});



// Things to learn from this level db implementation
// The level db has a module called level-sublevel, you need to install it before importing it through require method.
// To integrate level-db with Indexed-db use db: require('level-sublevel'), into the area where you have defined sublevel, and level .
//  The sublevel is a database within a database.
// use budo to host the server into localhost:9966, which is by default
// change the start script in the package.json to budo server.js
// You had to install budo to use budo.
//  You need to install level-js.
// For other dependencies refer the package.json file.


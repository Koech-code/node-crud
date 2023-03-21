const mysql  = require('mysql');
const connection = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'crud',
    password: 'Nickson_100$',

})

connection.connect((err)=>{
    if(!err){
        console.log('Connected')

    }

    else{
        console.log(err)
    }
})

module.exports = connection;
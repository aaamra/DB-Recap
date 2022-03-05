require('env2')('.env');
const { Pool } = require('pg');


let dbURL = '';

let { NODE_ENV, DEV_DB_URL, DATABASE_URL, TEST_DB_URL} = process.env;

if(NODE_ENV === "dev"){
    dbURL = DEV_DB_URL;
}else if(NODE_ENV === "test"){
    dbURL = TEST_DB_URL;
}else if(NODE_ENV === "production"){
    dbURL = DATABASE_URL;
}else{
    throw new Error('invalid DB URL !');
}

const options = {
    connectionString: dbURL,
    ssl: false
}

module.exports = new Pool(options);
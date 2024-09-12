
import express from 'express';
import {Connection} from './src/bd/Connection.js';
import {Database} from './src/bd/Database.js';
import {Populate} from './src/bd/Populate.js';

import product_prices_route from './src/routes/product_price.js';

const app = express();

/*
1. connect to the bd
2. create tables
3. populate db with given data in the test
*/

//make the connection to the db
export const conn = new Connection();

//with the db connection reference we create an instance of Database
const db = new Database(conn.db);
//call method to create the tables
db.create_tables();

//populate db
const record = new Populate(conn.db);
record.populate_db();

//close connection?---

//routes
//root
app.get('/', (req, res) => {
  res.send('technical test');
});
//product_prices endpoint
app.use("/", product_prices_route);

export default app;
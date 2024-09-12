import sqlite3 from 'sqlite3';


// connection to the in memory db
export function connection() {

    return new sqlite3.Database(':memory:',(err)=>{
        if(err){
            //show error msg
            console.error(err.message);
            return;
        }
        //show confirmation msg
        console.log('connection succesful to the in-memory db.');
       
         });
}

export class Connection {
    constructor() {
      this.db = this.start();
    }
    //method
    start(){
        return new sqlite3.Database(':memory:',(err)=>{
            if(err){
                //show error msg
                console.error(err.message);
                return;
            }
            //show confirmation msg
            console.log('connection succesful to the in-memory db.');
           
             });
    }
    //getter
    // get db() {
    //     return this.db;
    //   }
}

//poblar la bd


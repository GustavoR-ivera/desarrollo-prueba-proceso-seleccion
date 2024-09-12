//create the respective tables
export function create_db(db){
    //store table
    let sql = `CREATE TABLE store (
        store_id INTEGER PRIMARY KEY AUTOINCREMENT,
        store_name TEXT NOT NULL)`;

    // execute query
    db.run(sql, (err)=>{
        if(err){
            //show error msg
            console.error(err.message);
            return;
        }
        //show confirmation msg
        console.log('store table created.');
    });

    //product table
    sql = `CREATE TABLE product (
        product_id INTEGER PRIMARY KEY AUTOINCREMENT,
        store_id INTEGER NOT NULL,
        base_price REAL NOT NULL,
        FOREIGN KEY (store_id) REFERENCES store (store_id))`;
    // execute query
    db.run(sql, (err)=>{
        if(err){
            //show error msg
            console.error(err.message);
            return;
        }
        //show confirmation msg
        console.log('product table created.');
    });


    //rate table (tabla de tarifas)
    sql = `CREATE TABLE rate (
        rate_id INTEGER PRIMARY KEY AUTOINCREMENT,
        discount_value REAL NOT NULL,
        priority INTEGER NOT NULL,
        start_date TEXT NOT NULL,
        end_date TEXT NOT NULL) `;
    // execute query
    db.run(sql, (err)=>{
        if(err){
            //show error msg
            console.error(err.message);
            return;
        }
        //show confirmation msg
        console.log('rate table created.');
    });

    //price table
    sql = `CREATE TABLE price (
        product_id INTEGER NOT NULL,
        rate_id INTEGER NOT NULL,
        FOREIGN KEY (product_id) REFERENCES product (product_id),
        FOREIGN KEY (rate_id) REFERENCES rate (rate_id))`;
    // execute query
    db.run(sql, (err)=>{
        if(err){
            //show error msg
            console.error(err.message);
            return;
        }
        //show confirmation msg
        console.log('price table created.');
    });

}

export class Database{
    //db is a reference of the db connection
    constructor(db){
        this.db=db;
    }
    // method
    create_tables(){
        this.db.serialize(() => {
                //store table
            let sql = `CREATE TABLE store (
                store_id INTEGER PRIMARY KEY AUTOINCREMENT,
                store_name TEXT NOT NULL)`;

            // execute query
            this.db.run(sql, (err)=>{
                if(err){
                    //show error msg
                    console.error(err.message);
                    return;
                }
                //show confirmation msg
                console.log('store table created.');
            });

            //product table
            sql = `CREATE TABLE product (
                product_id INTEGER PRIMARY KEY AUTOINCREMENT,
                store_id INTEGER NOT NULL,
                base_price REAL NOT NULL,
                FOREIGN KEY (store_id) REFERENCES store (store_id))`;
            // execute query
            this.db.run(sql, (err)=>{
                if(err){
                    //show error msg
                    console.error(err.message);
                    return;
                }
                //show confirmation msg
                console.log('product table created.');
            });

            //rate table (tabla de tarifas)
            sql = `CREATE TABLE rate (
                rate_id INTEGER PRIMARY KEY AUTOINCREMENT,
                discount_value REAL NOT NULL,
                priority INTEGER NOT NULL,
                start_date TEXT NOT NULL,
                end_date TEXT NOT NULL) `;
            // execute query
            this.db.run(sql, (err)=>{
                if(err){
                    //show error msg
                    console.error(err.message);
                    return;
                }
                //show confirmation msg
                console.log('rate table created.');
            });

            //price table
            sql = `CREATE TABLE price (
                product_id INTEGER NOT NULL,
                rate_id INTEGER NOT NULL,
                FOREIGN KEY (product_id) REFERENCES product (product_id),
                FOREIGN KEY (rate_id) REFERENCES rate (rate_id))`;
            // execute query
            this.db.run(sql, (err)=>{
                if(err){
                    //show error msg
                    console.error(err.message);
                    return;
                }
                //show confirmation msg
                console.log('price table created.');
            });
        });
    }

}
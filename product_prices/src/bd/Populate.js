export class Populate{
      //db is a reference of the db connection
      constructor(db){
        this.db=db;
    }
    // method
    populate_db(){
        this.db.serialize(() => {
            //store table
            let sql = `INSERT INTO store 
            (store_id,store_name) VALUES (1, 'store_x')`;

            // execute query
            this.db.run(sql, (err)=>{
                if(err){
                    //show error msg
                    console.error(err.message);
                    return;
                }
                //show confirmation msg
                console.log('store register created.');
            });

            //product table
            sql = `INSERT INTO product 
            (product_id,store_id,base_price) VALUES (35455,1,40)`;
    
            // execute query
            this.db.run(sql, (err)=>{
                if(err){
                    //show error msg
                    console.error(err.message);
                    return;
                }
                //show confirmation msg
                console.log('product register created.');
            });

            //rate table
            sql = `INSERT INTO rate 
                        (rate_id, discount_value, priority, start_date, end_date)
                    VALUES (1, 11.25, 0, '2020-06-14 00:00:00', '2020-12-31 23:59:59'),
                        (2, 36.375,1, '2020-06-14 15:00:00', '2020-06-14 18:30:00'),
                        (3, 23.75, 1, '2020-06-15 00:00:00', '2020-06-15 11:00:00'),
                        (4, 2.625, 1, '2020-06-15 16:00:00', '2020-12-31 23:59:59')`;
    
            // execute query
            this.db.run(sql, (err)=>{
                if(err){
                    //show error msg
                    console.error(err.message);
                    return;
                }
                //show confirmation msg
                console.log('rates registers created.');
            });

            //prices table
            sql = `INSERT INTO price (product_id,rate_id) 
                    VALUES  (35455,1),
                            (35455,2),
                            (35455,3),
                            (35455,4)`;
    
            // execute query
            this.db.run(sql, (err)=>{
                if(err){
                    //show error msg
                    console.error(err.message);
                    return;
                }
                //show confirmation msg
                console.log('product prices created.');
            });
        });
    }
    
}
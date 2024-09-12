import {conn} from '../../index.js';

export const getFinalPrice = (req,res)=>{
    //get the parameteres from the request object
    const productId = req.params.product_id;
    const date = req.params.purchase_date;

    //query1: get the correct rate
    let sql = `SELECT * FROM rate WHERE ? BETWEEN start_date AND end_date ORDER BY priority desc limit 1`;
    //const sql = "select * from rate" ;
    conn.db.all(sql, [date], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send("error");
        } else if (result.length != 0) { //check if there is a rate for the given date
             //query2: 
             //const discount = result[0].discount_value;
             sql = `select p.product_id, p.store_id, r.rate_id, r.start_date, r.end_date 
             from product p join rate r on ? BETWEEN r.start_date AND r.end_date
             where p.product_id = ? ORDER BY r.priority desc limit 1`; 

            conn.db.all(sql, [date, productId], (err, result) => {  
                if (err) {
                    console.log(err);
                    res.status(500).send("error");
                } else {
                    //result is a list with the data of the product and the respective rate
                    res.status(200).json(result);
                }
             });
        }
        else{
            //msg for no rate found
            res.status(404).send("there is no rate registered for the given date");
        }
    });

   
}
import {conn} from '../../app.js';

export const getFinalPrice = (req,res)=>{

    //get the parameteres from the request object
    const productId = req.params.product_id;
    const date = req.params.purchase_date;

     // check correct parameters
     if (!productId || !date) {
        return res.status(400).json({ message: "there is no parameter" });
      } else if (isNaN(parseFloat(productId))){
        //checking if the product_id is a number
        return res.status(400).json({ message: "product_id is not a number" });
      }


    //query1: check if the product_id is registered
    let sql = "SELECT * FROM product WHERE product_id = ?" ;
    conn.db.all(sql, [productId], (err, result) => { 
        if(err){
            console.log(err);
            return res.status(500).json({message:"error" });
        }
        else if (result.length == 0) {
            //msg for no product found
            return res.status(404).json({message:"there is no product registered with the given product_id"});
        }
        else{
            //the product is registered then we can continue with the process
             //query2: get the correct rate
            sql = `SELECT * FROM rate WHERE ? BETWEEN start_date AND end_date ORDER BY priority desc limit 1`;
            
            conn.db.all(sql, [date], (err, result) => {
                if (err) {
                    console.log(err);
                    return res.status(500).json({message: "error"});
                    
                } else if (result.length != 0) { //check if there is a rate for the given date
                    //query3: 
                    //final_price is a calculated field -> base_price - (base_price*discount_value)/100 (apply selected discount)
                    sql = `select p.product_id, p.store_id, r.rate_id, r.start_date, r.end_date, p.base_price - (p.base_price*r.discount_value)/100 as final_price
                            from product p join rate r on ? BETWEEN r.start_date AND r.end_date
                            where p.product_id = ? 
                            ORDER BY r.priority desc limit 1`; 

                    conn.db.all(sql, [date, productId], (err, result) => {  
                        if (err) {
                            console.log(err);
                            return res.status(500).json({message: "error"});
                        } else {
                            //result is a list with the data of the product and the respective rate
                            return res.status(200).json(result);
                        }
                    });
                }
                else{
                    //msg for no rate found
                    return res.status(404).json({message: "there is no rate registered for the given date"});
                }
            });

        }
      });
        
        

   

   
}
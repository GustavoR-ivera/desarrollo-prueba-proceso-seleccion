import express  from "express";
import { getFinalPrice} from "../controllers/product_prices.js";

const router = express.Router()

//definition of the route related with the final price for a product
router.get("/get-final-price/:product_id/:purchase_date", getFinalPrice)

export default router
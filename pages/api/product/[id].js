import nc from "next-connect";
import databaseConnection from "../../../config/databaseConnection.js";
import {deleteSingleProduct, getSingleProduct, updateSingleProduct} from "../../../contorller/ProductController";

const handler = new nc();

databaseConnection().then(() => {
    handler.get(getSingleProduct);
    handler.put(updateSingleProduct);
    handler.delete(deleteSingleProduct);
})

export default handler;
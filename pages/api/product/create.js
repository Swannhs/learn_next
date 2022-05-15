import nc from "next-connect";
import databaseConnection from "../../../config/databaseConnection";
import {createProduct} from "../../../contorller/ProductController";

const handler = new nc();

databaseConnection().then(() => {
    handler.post(createProduct);
})

export default handler;
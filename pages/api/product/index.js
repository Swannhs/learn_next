import nc from "next-connect";
import databaseConnection from "../../../config/databaseConnection.js";
import {getAllProducts} from "../../../contorller/ProductController.js";


const handler = nc();

databaseConnection().then(() => {
    handler.get(getAllProducts);
})

export default handler;
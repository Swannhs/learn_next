import nc from "next-connect";
import databaseConnection from "../../../config/databaseConnection";
import {createPost} from "../../../contorller/PostController";

const handler = new nc();

databaseConnection().then(() => {
    handler.post(createPost)
})

export default handler;
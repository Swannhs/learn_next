import nc from "next-connect";
import databaseConnection from "../../../config/databaseConnection";
import {getSinglePostBySlug} from "../../../contorller/PostController";

const handler = new nc();

databaseConnection().then(() => {
    handler.get(getSinglePostBySlug);
})

export default handler;
import nc from "next-connect";
import {createPost, getAllPosts} from "../../../contorller/PostController";
import databaseConnection from "../../../config/databaseConnection";

const handler = nc();

databaseConnection().then(() => {
    handler.get(getAllPosts);
    handler.post(createPost);
});


export default handler;
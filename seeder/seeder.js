import Product from "../models/Product.js";
import Post from "../models/Post.js";
import databaseConnection from "../config/databaseConnection.js";
import dummyProducts from './data/product.json' assert {type: 'json'}
import dummyPosts from './data/post.json' assert {type: 'json'}

console.log("seeding products .........................");

databaseConnection().then(async () => {
    try {
        await Product.deleteMany({});
        console.log("Products deleted");

        await Product.insertMany(dummyProducts)
        console.log("Products inserted");
    } catch (error) {
        console.error('Error seeding products');
        console.log(error);
    }
    try {
        await Post.deleteMany({});
        console.log("Posts deleted");

        await Post.insertMany(dummyPosts);
        console.log("Posts inserted");
    } catch (error) {
        console.error('Error seeding posts');
        console.log(error);
    }
    process.exit();
})
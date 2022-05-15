import Product from "../models/Product.js";

export const getAllProducts = async (request, response) => {
    try {
        const products = await Product.find();
        response.status(200).json({
            status: true,
            result: products.length,
            products: products
        })
    } catch (error) {
        response.status(500).json({
            status: false,
            message: 'Failed to get all products'
        })
    }
}
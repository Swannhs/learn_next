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

export const getSingleProduct = async (request, response) => {
    try {
        const product = await Product.findById(request.query.id);
        response.status(200).json({
            status: true,
            product: product
        })
    } catch (error) {
        response.status(500).json({
            status: false,
            message: 'Failed to get single product'
        })
    }
}

export const updateSingleProduct = async (request, response) => {
    try {
        const product = await Product.findByIdAndUpdate(request.query.id, request.body);
        response.status(200).json({
            status: true,
            product: product,
            message: 'Product updated successfully'
        })
    } catch (error) {
        response.status(500).json({
            status: false,
            message: 'Failed to update single product'
        })
    }
}

export const deleteSingleProduct = async (request, response) => {
    try {
        const product = await Product.findByIdAndDelete(request.query.id);
        console.warn(product, 'Product deleted');
        response.status(200).json({
            status: true,
            message: 'Product deleted successfully'
        })
    } catch (error) {
        response.status(500).json({
            status: false,
            message: 'Failed to delete product'
        })
    }
}
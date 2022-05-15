import Post from "../models/Post";

export const getAllPosts = async (request, response) => {
    try {
        const posts = await Post.find();
        response.status(200).json({
            status: true,
            result: posts.length,
            posts: posts
        });
    } catch (error) {
        response.status(500).json({
            status: false,
            message: 'Fetching posts failed',
        });
        console.error(error);
    }
}

export const getSinglePostBySlug = async (request, response) => {
    try {
        const post = await Post.findOne({ slug: request.query.slug });
        response.status(200).json({
            status: true,
            post: post
        });
    } catch (error) {
        response.status(500).json({
            status: false,
            message: 'Fetching post failed',
        });
        console.error(error);
    }
}

export const createPost = async (request, response) => {
    try {
        const post = await Post.create(request.body);
        response.status(201).json({
            status: true,
            message: 'Post created successfully',
            post: post
        });
    } catch (error) {
        response.status(500).json({
            status: false,
            message: 'Creating post failed',
            error: error
        });
    }
}
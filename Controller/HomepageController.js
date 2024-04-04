const cloudinary = require('cloudinary').v2;
const Post = require('../Module/HomepageModule');
const multer = require('multer');

 
const storage = multer.diskStorage({
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
});

const upload = multer({ storage: storage }).single('imageUrl');


cloudinary.config({
    cloud_name: 'djrh8oflc',
    api_key: '544113442678141',
    api_secret: 'G6AKEYGFz2eiEcVHXg-4myu5cXg'
});

exports.getAllPosts = async (req, res) => {
    
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createPost = async (req, res) => {
    upload(req, res, async (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Server Error');
        }
    try {
        const { category } = req.body;
        const result = await cloudinary.uploader.upload(req.file.path);
        const newPost = new Post({ category,  imageUrl: result.secure_url });
        const savedPost = await newPost.save();
        res.status(201).json(savedPost);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

};

exports.updatePost = async (req, res) => {
    const { id } = req.params;
    const { category,  } = req.body;
    try {
        const post = await Post.findById(id);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        post.category = category;
        // post.content = content;
        await post.save();
        res.json(post);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deletePost = async (req, res) => {
    const { id } = req.params;
    try {
        const post = await Post.findByIdAndDelete(id);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.json({ message: 'Post deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
// routes/postRoutes.js
const express = require('express');
const router = express.Router();
const postController = require('../Controller/Homepage2Controller');
// const upload = require('../middlewares/upload');

router.get('/images', postController.getAllPosts);
router.post('/image2', postController.createPost);
router.put('/image2/:id', postController.updatePost);
router.delete('/image2/:id', postController.deletePost);

module.exports = router;

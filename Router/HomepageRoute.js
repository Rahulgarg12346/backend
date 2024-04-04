const express = require('express');
const router = express.Router();
const postController = require('../Controller/HomepageController');
// const upload = require('../middlewares/upload');

router.get('/image', postController.getAllPosts);
router.post('/image', postController.createPost);
router.put('/image/:id', postController.updatePost);
router.delete('/image/:id', postController.deletePost);

module.exports = router;
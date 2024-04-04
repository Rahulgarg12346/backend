const express = require("express")
const router = express.Router();
const controller = require('../Controller/Librarycontroller')
 



router.post('/book', controller.createAddBook);
router.get('/bookget', controller.getbook);
router.get('/book/:id', controller.getAllAddBookById );
router.delete('/book/:id', controller.deleterAddBook);
router.put('/book/:id', controller.updateAddBook);





// router.post('/librarysignup', controller.signup)
// router.post('/librarylogin', controller.login)
router.post('/library', controller.createLibrary);
router.get('/library/:id', controller.getAllLibraryById);
router.delete('/library/:id', controller.deleterLibrary);
router.put('/library/:id', controller.updateLibrary);



router.post('/transaction', controller.createtransaction)
// router.get('/library', controller.createLibrary);
router.get('/transaction/:id', controller.getAlltransactionById);
router.delete('/transaction/:id', controller.deletertransaction);
router.put('/transaction/:id', controller.updatetransaction);

module.exports=router;
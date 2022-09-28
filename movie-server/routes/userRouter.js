const express=require('express')
const userController=require('../controllers/userController')
const router= express.Router()


router.get('/:firstname',userController.getUser);
router.post('/signup',userController.signup);
router.get('/',userController.getAll);
router.put('/:id/:updated',userController.updated);


module.exports=router
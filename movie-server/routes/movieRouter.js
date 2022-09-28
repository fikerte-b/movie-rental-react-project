const express=require('express')
const movieController=require('../controllers/movieController')
const router= express.Router()


router.get('/:id',movieController.getMovie);
router.post('/',movieController.add);
router.get('/',movieController.getAll);
router.put('/:id',movieController.updated);
router.delete('/:id', movieController.deleteById);


module.exports=router
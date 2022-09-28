
const Movie = require('../models/movie')


exports.getMovie = async (req, res, next) => {
    const result = await Movie.findOne({ id: req.params.id })
    res.status(200).send(result)
    // res.json(result);
    // console.log(id, "iidddddd");
}
exports.getAll = async (req, res) => {
    const result = await Movie.find({})
    res.status(200).send(result)
}
exports.updated = async (req, res, next) => {
    // console.log(req.body);
    const result = await Movie.findOneAndUpdate({ id: req.params.id }, req.body)
    res.status(200).send(result)

}
exports.add = async (req, res, next) => {
    try{
    // const { username, password } = req.body;
    const result = await new Movie(req.body).save()
   }catch(error){
    next(error)
   }

}
//regular delete
// exports.deleteById = async (req, res) => {
//    const result =  await Movie.findByIdAndDelete(req.params.id);
//    res.status(200).send(result);
// }


// softdelete

exports.deleteById = async (req, res) => {
     const result = await Movie.findOne({id: req.params.id});
    result.isDelete =true;
    const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, result);
    res.json(updatedMovie);

}
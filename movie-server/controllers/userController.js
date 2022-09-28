const User = require('../models/user')



exports.getUser = async (req, res, next) => {
    const result = await User.findOne({ firstname: req.params.firstname })
    res.status(200).send(result)
}
exports.getAll = async (req, res) => {
    const result = await User.find({})
    res.status(200).send(result)
}
exports.updated = async (req, res, next) => {
    // console.log(req.body);
    const result = await User.findOneAndUpdate({ id: req.params.id }, req.body)
    res.status(200).send(result)

}
exports.signup = async (req, res, next) => {
    // const { username, password } = req.body;
    const result = await new User(req.body).save()
    res.status(201).send(result)

}
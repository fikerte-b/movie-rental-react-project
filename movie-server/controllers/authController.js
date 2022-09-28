const jwt = require("jsonwebtoken");

const User = require("../models/user");

const SECRET = "THis is a secret!!";

exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  if (email && password) {
    let result;
    try {
      result = await User.findOne({ email, password });
    } catch (error) {
      return next(new Error("User not found"));
    }
    if (result) {
      const accessToken = jwt.sign(
        {
          id: result._id,
          email: result.email,
          isAdmin: result.isAdmin,
          iat: Date.now(),
        },
        SECRET,
        {
          expiresIn: 60 * 3,
        }
      );
      // res.status(200).send(result)
      res
        .status(200)
        .send({
          accessToken,
          email: result.email,
          id: result._id,
          isAdmin: result.isAdmin
        });
    } else {
      res.status(400).send(new Error("Invalid username"))
    }
  } else {
    res.status(400).send(new Error("Please enter username"))
  }
};

exports.authenticate = (req, res, next) => {
  if (req.headers.authorization) {
    const [, token] = req.headers.authorization.split(" ");
    console.log(token);
    try {
      let result = jwt.verify(token, SECRET);
      req.payload = result;
      next();
    } catch (err) {
      res.status(400).send(new Error("Invalid JWT"));
    }
  } else {
    res.status(400).send(new Error("nor authorized"))
  }
};

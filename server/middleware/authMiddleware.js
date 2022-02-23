const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

// create protect function
const protect = asyncHandler(async (req, res, next) => {
  let token; // initialize a token variable, it gets ent in the headers: req.headers

  // every token has the form: "Bearer ehy(token)", so we check if it starts with bearer
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // get token from header
      token = req.headers.authorization.split(" ")[1];

      // verify the token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // get user from token, find the user id from token that was created, use mongoose.findById method and remove the password from the returned object
      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("Not authorized");
    }
  }

  // if there is no token
  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

module.exports = {
  protect,
};

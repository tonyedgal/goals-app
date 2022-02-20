// @desc Register User
// @route POST /api/user
// @access Public
const registerUser = (req, res) => {
  res.json({ message: "Register User" });
};

// @desc Authenticate User
// @route POST /api/user/login
// @access Public
const loginUser = (req, res) => {
  res.json({ message: "Login user" });
};

// @desc Get user data
// @route POST /api/user/me
// @access Public
const getMe = (req, res) => {
  res.json({ message: "User data" });
};

module.exports = {
  registerUser,
  loginUser,
  getMe,
};

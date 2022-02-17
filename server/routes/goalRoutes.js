const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  // make a request to home route "/" because the route has been specified in server.js app.use
  res.status(200).json({ message: "Get goals" }); // try to set the response status
});

router.post("/", (req, res) => {
  res.status(200).json({ message: "Set goal" });
});

router.put("/:id", (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
});

router.delete("/:id", (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` });
});

module.exports = router;

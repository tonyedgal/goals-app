require("dotenv").config();

const express = require("express");
const app = express();

const port = process.env.PORT || 8000;

app.use("/api/goals", require("./routes/goalRoutes"));

const listener = app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
  console.log(listener.address());
});

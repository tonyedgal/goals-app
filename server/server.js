require("dotenv").config();

const express = require("express");
const app = express();
const { errorHandler } = require("./middleware/errorMiddleware");

const port = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./routes/goalRoutes"));

app.use(errorHandler);

const listener = app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
  console.log(listener.address());
});

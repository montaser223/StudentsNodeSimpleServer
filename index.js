const express = require("express");
const app = express();
const cors = require("cors")();
const studentsRoute = require("./routes/students");

app.use(cors);
app.use(express.json());
app.use("/students", studentsRoute);
app.listen(3000, () => {
  console.log("app running");
});

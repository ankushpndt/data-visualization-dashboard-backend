const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const initializeDbConnection = require("./db/db.connection");
const metricsRoute = require("./routes/metrics.route.js")
const PORT = process.env.PORT || 5000;

const app = express();

initializeDbConnection();

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Data Visualization Dashboard" );
});
app.use("/metrics",metricsRoute)
app.use("*", function (req, res) {
  res.status(400).json("Page Not Found");
});




app.listen(PORT, () => {
  console.log("server started at",PORT);
});
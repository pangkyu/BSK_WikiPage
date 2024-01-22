const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
const port = 3001;

app.use(cors());

app.use(bodyParser.json());

app.get("/data", (req, res) => {
  const dataPath = path.join(__dirname, "public", "data", "data.json");
  try {
    const jsonData = fs.readFileSync(dataPath, "utf-8");
    res.json(JSON.parse(jsonData));
  } catch (error) {
    console.error(`err reading data : ${error}`);
    res.status(500).send("Internal Server error");
  }
});

app.listen(port, () => {
  console.log(`server is running ${port}`);
});

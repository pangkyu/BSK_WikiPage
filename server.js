const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
const port = 3001;

const dataPath = path.join(__dirname, "public", "data", "data.json");
app.use(cors());

app.use(bodyParser.json());

app.get("/data", (req, res) => {
  try {
    const jsonData = fs.readFileSync(dataPath, "utf-8");
    res.json(JSON.parse(jsonData));
  } catch (error) {
    console.error(`err reading data : ${error}`);
    res.status(500).send("Internal Server error");
  }
});

app.post("/data", (req, res) => {
  try {
    const jsonData = fs.readFileSync(dataPath, "utf-8");
    const newData = req.body;
    const updatedData = [...JSON.parse(jsonData), newData];
    fs.writeFileSync(dataPath, JSON.stringify(updatedData, null, 2));

    res.json(updatedData);
  } catch (error) {
    console.error("Error updating data:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.put("/data/:id", (req, res) => {
  try {
    const jsonData = fs.readFileSync(dataPath, "utf-8");
    const idToUpdate = parseInt(req.params.id);
    const updatedData = JSON.parse(jsonData).map((item) =>
      item.id === idToUpdate
        ? { ...item, title: req.body.title, content: req.body.content }
        : item
    );
    fs.writeFileSync(dataPath, JSON.stringify(updatedData, null, 2));
    res.json(updatedData);
  } catch (error) {
    console.error(`Error Update : ${error}`);
    res.status(500).send("Internal Server Error");
  }
});

app.delete("/data", (req, res) => {
  try {
    const jsonData = fs.readFileSync(dataPath, "utf-8");
    const idListToDelete = req.body.selectedItems || [];
    const updatedData = JSON.parse(jsonData).filter(
      (item) => !idListToDelete.includes(item.id)
    );
    fs.writeFileSync(dataPath, JSON.stringify(updatedData, null, 2));
    res.json(updatedData);
  } catch (error) {
    console.error(`Error Delete : ${error}`);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`server is running ${port}`);
});

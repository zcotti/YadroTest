const express = require("express");
const cors = require("cors");
const app = express();
const port = 4000;

app.use(cors());

const data = [
  {
    id: 1,
    title: "abc",
    values: [12, 45, 67, 23, 89, 34, 56],
  },
  {
    id: 2,
    title: "cde",
    values: [56, 23, 45, 78, 12, 90, 33],
  },
  {
    id: 3,
    title: "FGH",
    values: [34, 67, 89, 12, 45, 78, 90],
  },
  {
    id: 4,
    title: "ijk",
    values: [22, 11, 44, 55, 77, 88, 99],
  },
  {
    id: 5,
    title: "xyz",
    values: [10, 20, 30, 40, 50, 60, 70],
  },
];

app.get("/api/data", (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

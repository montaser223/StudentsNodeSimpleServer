const express = require("express");
const router = express.Router();
const students = [];

router.get("/", (req, res) => {
  res.status(200).send(students);
});

router.get("/:id", (req, res) => {
  const index = getIndex(+req.params.id);
  if (index === -1) return res.status(404).json("unvalid id");
  res.status(200).send(students[index]);
});

router.put("/:id", (req, res) => {
  const index = getIndex(+req.params.id);
  if (index === -1) return res.status(404).json("unvalid id");
  students[index] = {
    id: +req.params.id,
    ...req.body,
  };
  res.status(200).send(students[index]);
});

router.post("/", (req, res) => {
  const student = {
    id: createIndex(),
    ...req.body,
  };
  students.push(student);
  res.status(200).send(student);
});

router.delete("/:id", (req, res) => {
  const index = getIndex(+req.params.id);
  if (index === -1) return res.status(404).json("unvalid id");
  students.splice(index, 1);
  res.status(200).json("deleted succssfully");
});

const getIndex = (id) => {
  return students.findIndex((student) => student.id === id);
};

const createIndex = () => {
  if (students.length == 0) return 1;
  return students[students.length - 1].id + 1;
};

module.exports = router;

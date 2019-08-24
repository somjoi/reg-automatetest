const express = require("express");
const app = express();
const student = require("./student");

app.get("/student/:id/timetable", (req, res) => {
  let studentId = req.param.id;
  let s = student.getStudentId(studentId);
  res.send(s.getTimetable());
});
module.exports = app;

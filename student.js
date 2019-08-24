class Student {
  constructor(studentId) {
    this.studentId = studentId;
  }
  getTimetable() {
    let timetable = [
      {
        subjectNo: "001",
        subjectName: "SoftwareTesting",
        startTime: "13:00",
        endTime: "17:00",
        day: "Sat"
      }
    ];
    return timetable;
  }
}

function getStudentId(id) {
  return new Student(id);
}

module.exports.getStudentId = getStudentId;

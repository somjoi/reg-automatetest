const request = require("supertest");
const app = require("../app");
require("chai").should();

describe("Reg System", () => {
  describe("GET /student/timetable", () => {
    it("should return timetable", done => {
      request(app)
        .get("/student/1/timetable")
        .expect(200)
        .end((err, res) => {
          let timetable = res.body;
          timetable.should.be.an("array");
          let subject = timetable[0];
          subject.should.be.property("subjectNo");
          subject.should.be.property("subjectName");
          subject.should.be.property("day");
          subject.should.be.property("startTime");
          subject.should.be.property("endTime");
          done();
        });
    });
  });
});

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const sendMail = require("./Controller/NodemailerController");

const Teacherrouter = require("./Router/Teacherrouter");
const Studentrouter = require("./Router/Studentrouter");
const Libraryrouter = require("./Router/Libraryrouter");
const Courserouter = require("./Router/CourseRouter");
const AdmitCardRouter = require("./Router/AdmitCardRouter");
const ClassRouter = require("./Router/ClassRouter");
const UserRoute = require("./Router/UserRoute");
const AttendenceRouter = require("./Router/AttendenceRouter");
const EventCalanderRouter = require("./Router/EventCalanderRouter");
const CommunicationRouter = require("./Router/CommunicationRouter");
const ActivityRouter = require("./Router/ActivityRouter");
const NewsRouter = require("./Router/NewsRouter");
const FeesRouter = require("./Router/FeesRouter");
const GradeRouter = require("./Router/GradeRouter");
const FacilityRouter = require("./Router/FacilityRouter");
const TransportRouter = require("./Router/TransportRouter");
const SliderImageRouter = require("./Router/SliderImageRouter");
const TimeTableRouter = require("./Router/TimeTableRouter");
const TestRouter = require("./Router/TestRouter");
const NotesRoute = require("./Router/NotesRoute");
const EnquireRouter = require("./Router/EnquireRouter");
const imgRouter = require("./Router/GalleryRoute");
const TeacherAttendanceRouter = require("./Router/TeacherAttendanceRouter");
const StudentAttendanceRoute = require("./Router/StudentAttendanceRoute");
const SubjectRouter = require("./Router/SubjectRouter");
const CalanderPhotoRoute = require("./Router/CalanderPhotoRoute");
const AssignmentRoute = require("./Router/AssignmentRoute");
const HomepageRoute = require("./Router/HomepageRoute");
const FeesDueRouter = require("./Router/FeesDueRouter")
const HomepagetextRouter = require("./Router/HomepagetextRouter")


const cors = require("cors");

const app = express();
const PORT = 5000;
app.use(express.json());

mongoose.connect("mongodb+srv://School:NoVDcG2ZTXd9BiDv@cluster0.styiinv.mongodb.net/?retryWrites=true&w=majority")
  .then(() => {
    console.log("Db connection is successful");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use(cors());
app.use(bodyParser.json());

// Define your routes
app.use("/", Teacherrouter, Studentrouter, Libraryrouter, Courserouter, AdmitCardRouter, ClassRouter, UserRoute, AttendenceRouter, 
 EventCalanderRouter, CommunicationRouter, ActivityRouter, NewsRouter, FeesRouter, GradeRouter, FacilityRouter, 
 TransportRouter, SliderImageRouter, TimeTableRouter, TestRouter, NotesRoute, EnquireRouter, imgRouter, TeacherAttendanceRouter,
 StudentAttendanceRoute, SubjectRouter, CalanderPhotoRoute, AssignmentRoute, HomepageRoute,FeesDueRouter,HomepagetextRouter);

// Define endpoint for sending emails
app.post("/send-email", sendMail);

app.listen(PORT, () => {
  console.log(`Server is started on port ${PORT}`);
});
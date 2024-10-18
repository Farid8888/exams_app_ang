import express from "express";
import {getStudents,addStudent,getCourses,addCourse,getExams,addExam} from './database.js'
import cors from 'cors'


const app = express();
app.use(express.json());
app.use(cors());






app.get('/students', async (req, res) => {
  const students = await getStudents()
  res.send(students)
});

app.post('/students', async (req, res) => {
  const { studentNumber,firstName, lastName, classRoom } = req.body;
  const result = await addStudent(studentNumber,firstName,lastName,classRoom)
  res.send(result)
});

app.get('/courses', async (req, res) => {
    const courses = await getCourses()
    res.send(courses)
  });
  
  app.post('/courses', async (req, res) => {
    const { courseCode,teacherFirstName,teacherLastName,classRoom,courseName } = req.body;
    const result = await addCourse(courseCode,teacherFirstName,teacherLastName,classRoom,courseName)
    res.send(result)
  });

  app.get('/exams', async (req, res) => {
    const courses = await getExams()
    res.send(courses)
  });
  
  app.post('/exams', async (req, res) => {
    const { courseCode,studentNumber,examDate,score } = req.body;
    const result = await addExam(courseCode,studentNumber,examDate,score)
    res.send(result)
  });


const port = 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));

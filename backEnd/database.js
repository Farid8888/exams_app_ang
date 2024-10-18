import sql from 'mysql2';

const pool = sql.createPool({
  host:'127.0.0.1',  
  user: 'root',
  password: '5228',
  database: 'task_app'
}).promise();


export const getStudents = async () => {
  try {
    const sql = 'SELECT * FROM students';
    const [results] = await pool.query(sql);
    return results ;
  } catch(err) {
    console.log(err);
    return false;
  }
}

export const addStudent = async (studentNumber,firstName,lastName,classRoom) => {
  try {
    const sql = `INSERT INTO students ( studentNumber,firstName, lastName, classRoom) 
    VALUES (?, ?, ?, ?)`
    const result = await pool.query(sql, [studentNumber,firstName,lastName,classRoom]);
    return result ;
  } catch(err) {
    return err;
  }
}

export const getCourses = async () => {
  try {
    const sql = 'SELECT * FROM courses';
    const [results] = await pool.query(sql);
    return results ;
  } catch(err) {
    console.log(err);
    return false;
  }
}

export const addCourse = async (courseCode,teacherFirstName,teacherLastName,classRoom,courseName) => {
  try {
    const sql = `INSERT INTO courses ( courseCode,teacherFirstName, teacherLastName, classRoom, courseName) 
    VALUES (?, ?, ?, ?, ?)`
    const result = await pool.query(sql, [courseCode,teacherFirstName,teacherLastName,classRoom,courseName]);
    return result ;
  } catch(err) {
    return err;
  }
}

export const getExams = async () => {
  try {
    const sql = 'SELECT * FROM exams';
    const [results] = await pool.query(sql);
    return results ;
  } catch(err) {
    console.log(err);
    return false;
  }
}

export const addExam = async (courseCode,studentNumber,examDate,score) => {
  try {
    const sql = `INSERT INTO exams ( courseCode,studentNumber,examDate,score) 
    VALUES (?, ?, ?, ?)`
    const result = await pool.query(sql, [courseCode,studentNumber,examDate,score]);
    return result ;
  } catch(err) {
    return err;
  }
}



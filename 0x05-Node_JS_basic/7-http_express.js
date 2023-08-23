const express = require('express');
const fs = require('fs').promises;

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!\n');
});

app.get('/students', async (req, res) => {
  try {
    const data = await fs.readFile(process.argv[2], 'utf8');
    const students = data
      .split('\n')
      .filter((line) => line.trim() !== '')
      .map((line) => line.split(','))
      .filter((student) => student.length === 4);

    const totalStudents = students.length;
    const csStudents = students.filter((student) => student[3].trim() === 'CS');
    const sweStudents = students.filter((student) => student[3].trim() === 'SWE');

    res.write('This is the list of our students\n');
    res.write(`Number of students: ${totalStudents}\n`);
    res.write(`Number of students in CS: ${csStudents.length}. List: ${csStudents.map((student) => student[0]).join(', ')}\n`);
    res.write(`Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.map((student) => student[0]).join(', ')}\n`);
    res.end();
  } catch (error) {
    res.status(404).send('Cannot load the database');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
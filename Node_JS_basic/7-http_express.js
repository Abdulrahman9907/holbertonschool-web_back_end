const express = require('express');
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');

      if (lines.length <= 1) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const students = lines.slice(1);
      const output = [];
      output.push(`Number of students: ${students.length}`);

      const fields = {};
      students.forEach((student) => {
        const [firstname, , , field] = student.split(',');
        if (field) {
          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(firstname);
        }
      });

      Object.keys(fields).forEach((field) => {
        output.push(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
      });

      resolve(output.join('\n'));
    });
  });
}

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const databasePath = process.argv[2];
  res.write('This is the list of our students\n');
  countStudents(databasePath)
    .then((output) => {
      res.end(output);
    })
    .catch((error) => {
      res.end(error.message);
    });
});

app.listen(1245);

module.exports = app;

const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(req, res) {
    const databasePath = process.argv[2];

    readDatabase(databasePath)
      .then((fields) => {
        const output = ['This is the list of our students'];
        const sortedFields = Object.keys(fields).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

        sortedFields.forEach((field) => {
          output.push(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
        });

        res.status(200).send(output.join('\n'));
      })
      .catch((error) => {
        res.status(500).send(error.message);
      });
  }

  static getAllStudentsByMajor(req, res) {
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    const databasePath = process.argv[2];

    readDatabase(databasePath)
      .then((fields) => {
        const students = fields[major] || [];
        res.status(200).send(`List: ${students.join(', ')}`);
      })
      .catch((error) => {
        res.status(500).send(error.message);
      });
  }
}

module.exports = StudentsController;

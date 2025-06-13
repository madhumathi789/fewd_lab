import React from 'react';

const StudentTable = ({ students }) => {
  return (
    <table border="1" cellPadding="10" cellSpacing="0">
      <thead>
        <tr>
          <th>Student</th>
          <th>Subject 1</th>
          <th>Subject 2</th>
          <th>Subject 3</th>
          <th>Total</th>
          <th>Average</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student, index) => {
          const total = student.marks.reduce((acc, val) => acc + val, 0);
          const average = (total / student.marks.length).toFixed(2);
          return (
            <tr key={index}>
              <td>{student.name}</td>
              {student.marks.map((mark, i) => (
                <td key={i}>{mark}</td>
              ))}
              <td>{total}</td>
              <td>{average}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default StudentTable;

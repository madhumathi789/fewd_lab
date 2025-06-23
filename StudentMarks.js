import React, { useState } from "react";

const StudentMarks = () => {
  const numStudents = 5;
  const numSubjects = 3;

  const [marks, setMarks] = useState(
    Array.from({ length: numStudents }, () => Array(numSubjects).fill(""))
  );

  const handleChange = (studentIndex, subjectIndex, value) => {
    const updatedMarks = marks.map((row, i) =>
      row.map((mark, j) =>
        i === studentIndex && j === subjectIndex ? value : mark
      )
    );
    setMarks(updatedMarks);
  };

  const calculateSum = (studentMarks) =>
    studentMarks.reduce((acc, val) => acc + (parseFloat(val) || 0), 0);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Student Marks Table</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Student</th>
            {[...Array(numSubjects)].map((_, idx) => (
              <th key={idx}>Subject {idx + 1}</th>
            ))}
            <th>Sum</th>
            <th>Average</th>
          </tr>
        </thead>
        <tbody>
          {marks.map((studentMarks, studentIndex) => {
            const sum = calculateSum(studentMarks);
            const avg = (sum / numSubjects).toFixed(2);
            return (
              <tr key={studentIndex}>
                <td>Student {studentIndex + 1}</td>
                {studentMarks.map((mark, subjectIndex) => (
                  <td key={subjectIndex}>
                    <input
                      type="number"
                      value={mark}
                      onChange={(e) =>
                        handleChange(studentIndex, subjectIndex, e.target.value)
                      }
                    />
                  </td>
                ))}
                <td>{sum}</td>
                <td>{avg}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default StudentMarks;

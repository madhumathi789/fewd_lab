import React from 'react';
import StudentTable from './StudentTable';

const App = () => {
  const students = [
    { name: 'Student 1', marks: [80, 75, 90] },
    { name: 'Student 2', marks: [60, 65, 70] },
    { name: 'Student 3', marks: [85, 95, 80] },
    { name: 'Student 4', marks: [70, 60, 65] },
    { name: 'Student 5', marks: [90, 88, 92] },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1>Student Marks Summary</h1>
      <StudentTable students={students} />
    </div>
  );
};

export default App;

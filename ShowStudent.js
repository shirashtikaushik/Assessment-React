import React, { useState, useEffect } from 'react';
import axios from 'axios';


function ShowStudentComponent() {
    debugger;
  const [students, setStudents] = useState([]);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/student');
        setStudents(response.data);
      } catch (error) {
        console.error('Error fetching student data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2 class="text-left">Show Student</h2>
      <div>
        {students.map((student) => (
          <div key={student.id} className="student-card">
            <h3>Student ID: {student.id}</h3>
            <p>Name: {student.name}</p>
            <p>DOB: {student.dob}</p>
            <p>Gender: {student.gender}</p>
            <p>Address: {student.address}</p>
            <p>Mobile No: {student.mobileNumber}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShowStudentComponent;


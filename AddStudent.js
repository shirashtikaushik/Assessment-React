
import axios from 'axios';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function AddStudentComponent() {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    gender: '',
    address: '',
    mobileNumber: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    dob: '',
    gender: '',
    address: '',
    mobileNumber: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setFormErrors({
      ...formErrors,
      [name]: value ? '' : `Please enter ${name}.`,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    const errors = {};
    for (const key in formData) {
      if (!formData[key]) {
        errors[key] = `Please enter ${key}.`;
      }
    }
    setFormErrors(errors);

    
    if (Object.keys(errors).length === 0) {
       axios.post('http://localhost:3000/student', formData);
     
      //console.log('Form submitted:', formData);

    }
  };
 
  return (
    
    <div className="container mt-4">
    <h2 class="text-left">Add Student</h2>
    <form onSubmit={handleSubmit} className="form-card">
  <table className="table">
    <tbody>
      <tr>
        <th>Student Name:</th>
        <td>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <span className="error">{formErrors.name}</span>
        </td>
      </tr>
      <tr>
        <th>Student DOB:</th>
        <td>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleInputChange}
          />
          <span className="error">{formErrors.dob}</span>
        </td>
      </tr>
      <tr>
        <th>Student Gender:</th>
        <td>
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={formData.gender === 'Male'}
              onChange={handleInputChange}
            />
            Male
          </label>
          
          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={formData.gender === 'Female'}
              onChange={handleInputChange}
            />
            Female
          </label>
          <span className="error">{formErrors.gender}</span>
        </td>
      </tr>
      <tr>
        <th>Address:</th>
        <td>
          <input
            type="text"
            name="address" 
            value={formData.address}
            onChange={handleInputChange}
          />
          <span className="error">{formErrors.address}</span>
        </td>
      </tr>
      <tr>
        <th>Mobile No:</th> 
        <td>
          <input
            type="text"
            name="mobileNumber" 
            value={formData.mobileNumber}
            onChange={handleInputChange}
          />
          <span className="error">{formErrors.mobileNumber}</span>
        </td>
      </tr>
    </tbody>
  </table>
  <button type="submit" className="btn btn-primary">
    Submit
  </button>
</form>
  </div>
  
  
  );
}
export default AddStudentComponent;

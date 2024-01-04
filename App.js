
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderComponent from './Components/Header';
import AddStudentComponent from './Components/AddStudent';
import ShowStudentComponent from './Components/ShowStudent';
 import './App.css';

function App() {
  return (
    <Router>
      <div class="text-center">
        <HeaderComponent />
        <Routes>
          <Route path="/add-student" element={<AddStudentComponent />} />
          <Route path="/show-student" element={<ShowStudentComponent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

// HeaderComponent.js
import React from 'react';
import { Link } from 'react-router-dom';

function HeaderComponent() {
  return (
    <nav>
      <div>
        <h1 class="text-center">StudentApp</h1>
        <ul>
          <li><Link to="/add-student">Add Student</Link></li>
          <li><Link to="/show-student">Show Student</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default HeaderComponent;

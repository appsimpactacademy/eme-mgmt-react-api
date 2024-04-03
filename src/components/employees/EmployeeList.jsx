import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import EmployeeRow from './EmployeeRow';

function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/v1/employees');
        setEmployees(response.data);
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };

    fetchEmployees();
  }, []);

  return (
    <div>
      <h1>Employee List</h1>
      <Link to={`/employee/new`} className="btn btn-primary">
        Create New Employee
      </Link>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th colSpan="3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => (
            <EmployeeRow key={employee.id} employee={employee} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;

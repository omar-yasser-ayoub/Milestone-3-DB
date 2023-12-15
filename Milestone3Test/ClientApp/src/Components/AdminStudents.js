
import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom'
import React, { useState } from 'react';
import CustomTable from './CustomTable'

const AdminStudents = (props) => {
    return (
        <div>
            <h1>All Students</h1>
            <CustomTable apistring="api/admin/ListStudents" />
        </div>
    );
};

export default AdminStudents;



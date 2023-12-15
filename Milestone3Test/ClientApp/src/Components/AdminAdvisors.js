
import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom'
import React, { useState } from 'react';
import CustomTable from './CustomTable'

const AdminAdvisors = (props) => {
    return (
        <div>
            <h1>All Advisors</h1>
            <CustomTable apistring="api/admin/ListAdvisors" />
        </div>
    );
};

export default AdminAdvisors;



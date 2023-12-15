
import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom'
import React, { useState } from 'react';
import CustomTable from './CustomTable'

const AdminRequests = (props) => {
    return (
        <div>
            <h1>All Pending Requests</h1>
            <CustomTable apistring="api/view/AllPendingRequest" />
        </div>
    );
};

export default AdminRequests;



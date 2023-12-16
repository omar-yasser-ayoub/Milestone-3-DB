
import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom'
import React, { useState } from 'react';
import CustomTable from './CustomTable'

const StudentGradPlan = (props) => {
    return (
        <div>
            <h3 className="tableTitle">Your Graduation Plan</h3>
            <CustomTable apistring="api/student/ViewGP" id={props.id} />
        </div>
    );
};

export default StudentGradPlan;



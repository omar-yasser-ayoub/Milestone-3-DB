import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom'
import React from 'react';
import CustomTable from './CustomTable';

const AdvisorStudents = (props) => {
    return (
        <div>
            <div className="container" style={{
                background: `linear-gradient(90deg, #4F4381, #8D81C7)`,
                color: '#fff',
            }}>
                <h1>Advisor Students</h1>
            </div>
            <CustomTable columns={["ID", "Student Name", "Major", "Course Name"]} />
        </div>
    );
};

export default AdvisorStudents;

import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom'
import React, { useState } from 'react';
import CustomTable from './CustomTable'
import CustomButton from './CustomButton'
const AdminSemesters = (props) => {

    const [startdate, setStartDate] = useState("")
    const [enddate, setEndDate] = useState("")
    const [semestercode, setSemesterCode] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault();


        fetch("api/admin/AddSemester", {
            method: 'POST',
            headers: {
                'startDate': startdate,
                'endDate': enddate,
                'semesterCode': semestercode
            },
        });

        setStartDate("")
        setEndDate("")
        setSemesterCode("")
        //logic for form submission
    }
    const handleStart = (e) => {
        e.preventDefault();
        setStartDate(e.target.value);
    }
    const handleEnd = (e) => {
        e.preventDefault();
        setEndDate(e.target.value);
    }
    const handleSemester = (e) => {
        e.preventDefault();
        setSemesterCode(e.target.value);
    }
    return (
        <div>
            <h1>All Semesters</h1>
            <CustomTable apistring="api/view/SemesterOfferedCourses" />
            <form onSubmit={handleSubmit}>
                <h1> Add A Semester</h1>
                <h5>Start Date</h5>
                <input value={startdate} onChange={handleStart} type="text" />
                <h5>End Date</h5>
                <input value={enddate} onChange={handleEnd} type="text" />
                <h5>Semester Code</h5>
                <input value={semestercode} onChange={handleSemester} type="text" />
                <CustomButton disabled={!startdate || !enddate || !semestercode} type="submit" label="Submit" />
            </form>
        </div>
    );
};

export default AdminSemesters;



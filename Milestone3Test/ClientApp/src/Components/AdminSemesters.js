
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
            <h3 className="centeredH3">All Semesters</h3>
            <CustomTable apistring="api/view/SemesterOfferedCourses" />
            <div className="box">
                <form onSubmit={handleSubmit}>
                    <h3> Add A Semester</h3>
                    <h6>Start Date</h6>
                    <input value={startdate} onChange={handleStart} type="text" class="form-control" placeholder="Type here..." />
                    <h6>End Date</h6>
                    <input value={enddate} onChange={handleEnd} type="text" class="form-control" placeholder="Type here..." />
                    <h6>Semester Code</h6>
                    <input value={semestercode} onChange={handleSemester} type="text" class="form-control" placeholder="Type here..." />
                    <CustomButton disabled={!startdate || !enddate || !semestercode} type="submit" label="Submit" />
                </form>
            </div>
        </div>
    );
};

export default AdminSemesters;



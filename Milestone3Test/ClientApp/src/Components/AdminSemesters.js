
import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom'
import React, { useState } from 'react';
import CustomTable from './CustomTable'
import CustomButton from './CustomButton'
import { Alert, UncontrolledAlert, Button } from 'reactstrap';
const AdminSemesters = (props) => {

    const [startdate, setStartDate] = useState("")
    const [enddate, setEndDate] = useState("")
    const [semestercode, setSemesterCode] = useState("")
    const [alertSuccess, setAlertSuccess] = useState(false);
    const [alertWarning, setAlertWarning] = useState(false);

    const toggleSuccess = () => {
        if (alertSuccess) {
            return
        }
        if (alertWarning) {
            closeAlertWarning();
        }
        setAlertSuccess(!alertSuccess);
    };
    const closeAlertSuccess = () => {
        setAlertSuccess(false);
    }
    const toggleWarning = () => {
        if (alertWarning) {
            return
        }
        if (alertSuccess) {
            closeAlertSuccess();
        }
        setAlertWarning(!alertWarning);
    };
    const closeAlertWarning = () => {
        setAlertWarning(false);
    }


    const handleSubmit = (e) => {
        e.preventDefault();


        fetch("api/admin/AddSemester", {
            method: 'POST',
            headers: {
                'startDate': startdate,
                'endDate': enddate,
                'semesterCode': semestercode
            },
        }).then(response => {
            if (!response.ok) {
                toggleWarning();
            }
            else {
                toggleSuccess();
            }
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
                    <UncontrolledAlert isOpen={alertSuccess} toggle={closeAlertSuccess}>
                        Success! Your Request was submitted.
                    </UncontrolledAlert>
                    <UncontrolledAlert color="warning" isOpen={alertWarning} toggle={closeAlertWarning}>
                        Request failed. Please check that all of your data is correct.
                    </UncontrolledAlert>
                </form>
            </div>
        </div>
    );
};

export default AdminSemesters;



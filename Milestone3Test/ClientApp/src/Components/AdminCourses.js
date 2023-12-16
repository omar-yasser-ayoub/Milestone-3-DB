
import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom'
import React, { useState } from 'react';
import CustomTable from './CustomTable'
import CustomButton from './CustomButton'
import { Alert, UncontrolledAlert, Button } from 'reactstrap';

const AdminCourses = (props) => {
    const [major, setmajor] = useState("")
    const [semester, setsemester] = useState("")
    const [credithours, setcredithours] = useState("")
    const [name, setname] = useState("")
    const [isoffered, setisoffered] = useState("")

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


        fetch("api/admin/AddCourse", {
            method: 'POST',
            headers: {
                'major': major,
                'semester': semester,
                'credit_hours': semester,
                'name': name,
                'is_offered': isoffered
            },
        }).then(response => {
            if (!response.ok) {
                toggleWarning();
            }
            else {
                toggleSuccess();
            }
        });

        setmajor("")
        setsemester("")
        setcredithours("")
        setisoffered("")
        setname("")
        //logic for form submission
    }
    const handleMajor = (e) => {
        e.preventDefault();
        setmajor(e.target.value);
    }
    const handleSemester = (e) => {
        e.preventDefault();
        setsemester(e.target.value);
    }
    const handleCredits = (e) => {
        e.preventDefault();
        setcredithours(e.target.value);
    }
    const handleisoffered = (e) => {
        e.preventDefault();
        setisoffered(e.target.value);
    }
    const handleName = (e) => {
        e.preventDefault();
        setname(e.target.value);
    }
    return (
        <div>
            <h3 className="centeredH3">All Courses</h3>
            <CustomTable apistring="api/view/CoursesSlotsInstructor" />
            <div className="box">
                <form onSubmit={handleSubmit}>
                    <h3> Add A Course</h3>
                    <h6>Major</h6>
                    <input value={major} onChange={handleMajor} type="text" class="form-control" placeholder="Type here..." />
                    <h6>Semester</h6>
                    <input value={semester} onChange={handleSemester} type="text" class="form-control" placeholder="Type here..." />
                    <h6>Credit Hours</h6>
                    <input value={credithours} onChange={handleCredits} type="text" class="form-control" placeholder="Type here..." />
                    <h6>Course Name</h6>
                    <input value={name} onChange={handleName} type="text" class="form-control" placeholder="Type here..." />
                    <h6>Is Offered</h6>
                    <input value={isoffered} onChange={handleisoffered} type="text" class="form-control" placeholder="Type here..." />
                    <CustomButton disabled={!major || !semester || !credithours || !name || !isoffered} type="submit" label="Submit" />
                </form>
                <UncontrolledAlert isOpen={alertSuccess} toggle={closeAlertSuccess}>
                    Success! Your Request was submitted.
                </UncontrolledAlert>
                <UncontrolledAlert color="warning" isOpen={alertWarning} toggle={closeAlertWarning}>
                    Request failed. Please check that all of your data is correct.
                </UncontrolledAlert>
            </div>
        </div>

    );
};

export default AdminCourses ;



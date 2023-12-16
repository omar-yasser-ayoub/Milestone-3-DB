
import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom'
import React, { useState } from 'react';
import CustomTable from './CustomTable'
import CustomButton from './CustomButton'
import { Alert, UncontrolledAlert, Button } from 'reactstrap';

const AdminStudents = (props) => {
    const [course, setCourse] = useState("")
    const [instructor, setInstructor] = useState("")
    const [student, setStudent] = useState("")
    const [semester, setSemester] = useState("")
    const [studentID, setStudentID] = useState("")
    const [advisorID, setAdvisorID] = useState("")
    const [alertSuccess, setAlertSuccess] = useState(false);
    const [alertWarning, setAlertWarning] = useState(false);
    const [alertSuccess1, setAlertSuccess1] = useState(false);
    const [alertWarning1, setAlertWarning1] = useState(false);

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

    const toggleSuccess1 = () => {
        if (alertSuccess1) {
            return
        }
        if (alertWarning1) {
            closeAlertWarning1();
        }
        setAlertSuccess1(!alertSuccess1);
    };
    const closeAlertSuccess1 = () => {
        setAlertSuccess1(false);
    }
    const toggleWarning1 = () => {
        if (alertWarning1) {
            return
        }
        if (alertSuccess1) {
            closeAlertSuccess1();
        }
        setAlertWarning1(!alertWarning1);
    };
    const closeAlertWarning1 = () => {
        setAlertWarning1(false);
    }


    const handleSubmit = (e) => {
        e.preventDefault();


        fetch("api/admin/LinkStudent", {
            method: 'POST',
            headers: {
                'cours_id': course,
                'instructor_id': instructor,
                'studentID': student,
                'semester_code': semester
            },
        }).then(response => {
            if (!response.ok) {
                toggleWarning1();
            }
            else {
                toggleSuccess1();
            }
        });

        setCourse("")
        setInstructor("")
        setStudent("")
        setSemester("")
        setStudentID("")
        setAdvisorID("")
    }
    const handleSubmit2 = (e) => {
        e.preventDefault();


        fetch("api/admin/LinkStudentToAdvisor", {
            method: 'POST',
            headers: {
                'studentID': studentID,
                'advisorID': advisorID,
            },
        }).then(response => {
            if (!response.ok) {
                toggleWarning();
            }
            else {
                toggleSuccess();
            }
        });

        setCourse("")
        setInstructor("")
        setStudent("")
        setSemester("")
        setStudentID("")
        setAdvisorID("")
    }
    const handleCourse = (e) => {
        e.preventDefault();
        setCourse(e.target.value);
    }
    const handleInstructor = (e) => {
        e.preventDefault();
        setInstructor(e.target.value);
    }
    const handleStudent = (e) => {
        e.preventDefault();
        setStudent(e.target.value);
    }
    const handleSemester = (e) => {
        e.preventDefault();
        setSemester(e.target.value);
    }
    const handleAdvisorID = (e) => {
        e.preventDefault();
        setAdvisorID(e.target.value);
    }
    const handleStudentID = (e) => {
        e.preventDefault();
        setStudentID(e.target.value);
    }
        
    return (
        <div>
            <h3 className="centeredH3">All Students</h3>
            <div className="bigTable">
                <CustomTable apistring="api/admin/ListStudents" />
            </div>
            <div className="centreDiv">
                <div className="inlineDiv">
                    <div className="box">
                        <form onSubmit={handleSubmit}>
                            <h3>Link Student to Course</h3>
                            <h6>Course ID</h6>
                            <input value={course} onChange={handleCourse} type="text" class="form-control" placeholder="Type here..." />
                            <h6>Instructor ID</h6>
                            <input value={instructor} onChange={handleInstructor} type="text" class="form-control" placeholder="Type here..." />
                            <h6>Student ID</h6>
                            <input value={student} onChange={handleStudent} type="text" class="form-control" placeholder="Type here..." />
                            <h6>Semester Code</h6>
                            <input value={semester} onChange={handleSemester} type="text" class="form-control" placeholder="Type here..." />
                            <CustomButton disabled={!course || !semester || !instructor || !student } type="submit" label="Submit" />
                        </form>
                        <UncontrolledAlert isOpen={alertSuccess1} toggle={closeAlertSuccess1}>
                            Success! Your Request was submitted.
                        </UncontrolledAlert>
                        <UncontrolledAlert color="warning" isOpen={alertWarning1} toggle={closeAlertWarning1}>
                            Request failed. Please check that all of your data is correct.
                        </UncontrolledAlert>
                    </div>
                </div>
                <div className="inlineDiv">
                    <div className="box">
                        <form onSubmit={handleSubmit2}>
                            <h3>Link Student to Advisor</h3>
                            <h6>Advisor ID</h6>
                            <input value={advisorID} onChange={handleAdvisorID} type="text" class="form-control" placeholder="Type here..." />
                            <h6>Student ID</h6>
                            <input value={studentID} onChange={handleStudentID} type="text" class="form-control" placeholder="Type here..." />
                    
                            <CustomButton disabled={!studentID || !advisorID} type="submit" label="Submit" />
                        </form>
                        <UncontrolledAlert isOpen={alertSuccess} toggle={closeAlertSuccess}>
                            Success! Your Request was submitted.
                        </UncontrolledAlert>
                        <UncontrolledAlert color="warning" isOpen={alertWarning} toggle={closeAlertWarning}>
                            Request failed. Please check that all of your data is correct.
                        </UncontrolledAlert>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminStudents;



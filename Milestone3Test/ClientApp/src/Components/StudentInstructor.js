
import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom'
import React, { useState, useEffect } from 'react';
import CustomTable from './CustomTable';
import CustomButton from './CustomButton';
import { Alert, UncontrolledAlert, Button } from 'reactstrap';

const StudentPayment = (props) => {


    const [selectedValue, setValue] = useState("")
    const [instructorForm, setInstructorForm] = useState("")
    const [courseForm, setCourseForm] = useState("")
    const [semester, setSemester] = useState("")
    const [instructorTable, setInstructorTable] = useState("1")
    const [courseTable, setCourseTable] = useState("1")

    const handleInstructorChange = (e) => {
        setInstructorTable(e.target.value);
    }
    const handleCourseChange = (e) => {
        setCourseTable(e.target.value);
    }
    const [alertSuccess, setAlertSuccess] = useState(false);
    const [alertWarning, setAlertWarning] = useState(false);

    const toggleSuccess = () => {
        if (alertSuccess) {
            return
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
        setAlertWarning(!alertWarning);
    };
    const closeAlertWarning = () => {
        setAlertWarning(false);
    }
    const handleSubmit = (e) => {
        e.preventDefault();



        fetch("api/student/ChooseInstructor", {
            method: 'POST',
            headers: {
                'StudentID': props.id,
                'instructorID': instructorForm ,
                'CourseID': courseForm,
                'current_semester_code': semester
            },
        }).then(response => {
            if (!response.ok) {
                toggleWarning();
            }
            else {
                toggleSuccess();
            }
        });

        setInstructorForm("")
        setCourseForm("")
        setSemester("")
        //logic for form submission
    }  
    const handleInstructorForm = (e) => {
        e.preventDefault();
        setInstructorForm(e.target.value);
    }
    const handleCourseForm = (e) => {
        e.preventDefault();
        setCourseForm(e.target.value);
    }
    const handleSemesterForm = (e) => {
        e.preventDefault();
        setSemester(e.target.value);
    }

    return (
        <div>
            <div>
                <div className="box" id="chooseInstructor">
                    <form onSubmit={handleSubmit}>
                        <h3>Choose Instructor</h3>
                        <h6>Instructor ID</h6>
                        <input value={instructorForm} onChange={handleInstructorForm} type="text" class="form-control" placeholder="Type here..." />
                        <h6>Course ID</h6>
                        <input value={courseForm} onChange={handleCourseForm} type="text" class="form-control" placeholder="Type here..." />
                        <h6>Current Semester Code</h6>
                        <input value={semester} onChange={handleSemesterForm} type="text" class="form-control" placeholder="Type here..." />
                        <CustomButton disabled={!instructorForm || !courseForm || !semester} type="submit" label="Submit" />
                    </form>
                    <UncontrolledAlert isOpen={alertSuccess} toggle={closeAlertSuccess}>
                        Success! Your Request was submitted.
                    </UncontrolledAlert>
                    <UncontrolledAlert color="warning" isOpen={alertWarning} toggle={closeAlertWarning}>
                        Request failed. Please check that all of your data is correct.
                    </UncontrolledAlert>
                </div>

                <div className="selection">
                    <div className="inlineDiv">
                        <label htmlFor="courses">Select Instructor</label>
                        <select id="instructors" name="courses" value={instructorTable} onChange={handleInstructorChange} className="labelledSelect">
                            <option value="1">1</option>
                            <option value="2">2</option>
                        </select>
                    </div>
                    <div className="inlineDiv">
                        <label htmlFor="courses">Select Course</label>
                        <select id="courses" name="courses" value={courseTable} onChange={handleCourseChange} className="labelledSelect">
                            <option value="1">1</option>
                            <option value="2">2</option>
                        </select>
                    </div>
                </div>
                <CustomTable apistring="api/student/ViewSlot" instructorid={instructorTable} courseid={courseTable} />
            </div>
        </div>
    );
};

export default StudentPayment;



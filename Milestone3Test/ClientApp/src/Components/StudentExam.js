
import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom'
import React, { useState } from 'react';
import CustomButton from './CustomButton'
import CustomTable from './CustomTable'
import { Alert, UncontrolledAlert, Button } from 'reactstrap';

const StudentExam = (props) => {
    const [selectedValue, setValue] = useState("api/student/RegisterFirstMakeup")
    const [course, setCourse] = useState("")
    const [semester, setSemester] = useState("")
    const [formTitle, setFormTitle] = useState("First Makeup")
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
    const handleChange = (e) => {
        setValue(e.target.value);

        // Use e.target.value instead of selectedValue
        if (e.target.value === "api/student/RegisterFirstMakeup") {
            setFormTitle("First Makeup");
        } else {
            setFormTitle("Second Makeup");
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();


        fetch(selectedValue, {
            method: 'POST',
            headers: {
                'StudentID': props.id,
                'courseID': course,
                'studentCurr_sem': semester
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
        setSemester("")
        //logic for form submission
    }
    const handleCourseChange = (e) => {
        e.preventDefault();
        setCourse(e.target.value);
    }
    const handleSemesterChange = (e) => {
        e.preventDefault();
        setSemester(e.target.value);
    }

    return (
        <div>
            <div className="selection">
                <label htmlFor="courses">Select Exam Type</label>
                <select id="courses" name="courses" value={selectedValue} onChange={handleChange} className="labelledSelect">
                    <option value="api/student/RegisterFirstMakeup">First Makeup</option>
                    <option value="api/student/RegisterSecondMakeup">SecondMakeup</option>
                </select>
            </div>
            <div className="box">
                <form onSubmit={handleSubmit}>
                    <h3> {formTitle} Registration</h3>
                    <h6>Course ID</h6>
                    <input value={course} onChange={handleCourseChange} type="text" class="form-control" placeholder="Type here.." />
                    <h6>Current Semester</h6>
                    <input value={semester} onChange={handleSemesterChange} type="text" class="form-control" placeholder="Type here.." />
                    <CustomButton disabled={!course || !semester} type="submit" label="Submit" />
                </form>
                <UncontrolledAlert isOpen={alertSuccess} toggle={closeAlertSuccess}>
                    Success! You are registered for the exam.
                </UncontrolledAlert>
                <UncontrolledAlert color="warning" isOpen={alertWarning} toggle={closeAlertWarning}>
                    Request failed. Please check that all of your data is correct.
                </UncontrolledAlert>
            </div>
            <CustomTable apistring="api/view/CoursesMakeupExam" id={props.id} semester={semester} />
        </div>
    );
};

export default StudentExam;




import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom'
import React, { useState, useEffect } from 'react';
import CustomTable from './CustomTable';
import CustomButton from './CustomButton';

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
                <div className="container" style={{
                    background: `linear-gradient(90deg, #4F4381, #8D81C7)`,
                    color: '#fff',
                }}>
                    <h1>Request</h1>
                </div>
                
                <form onSubmit={handleSubmit}>
                    <h1>Choose Instructor</h1>
                    <h5>Instructor ID</h5>
                    <input value={instructorForm} onChange={handleInstructorForm} type="text" />
                    <h5>Course ID</h5>
                    <input value={courseForm} onChange={handleCourseForm} type="text" />
                    <h5>Current Semester Code</h5>
                    <input value={semester} onChange={handleSemesterForm} type="text" />
                    <CustomButton disabled={!instructorForm || !courseForm || !semester} type="submit" label="Submit" />
                </form>

                <label htmlFor="courses">Select Instructor</label>
                <select id="instructors" name="courses" value={instructorTable} onChange={handleInstructorChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                </select>

                <label htmlFor="courses">Select Course</label>
                <select id="courses" name="courses" value={courseTable} onChange={handleCourseChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                </select>
                <h1> {instructorForm} </h1>
                <h1> {courseForm} </h1>
                <h1> {semester} </h1>

                <h1> {instructorTable} </h1>
                <h1> {courseTable} </h1>

                <CustomTable apistring="api/student/ViewSlot" instructorid={instructorTable} courseid={courseTable} />
            </div>
        </div>
    );
};

export default StudentPayment;



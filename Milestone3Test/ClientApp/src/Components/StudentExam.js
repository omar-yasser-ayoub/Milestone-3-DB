
import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom'
import React, { useState } from 'react';
import CustomButton from './CustomButton'
import CustomTable from './CustomTable'
const StudentExam = (props) => {
    const [selectedValue, setValue] = useState("api/student/RegisterFirstMakeup")
    const [course, setCourse] = useState("")
    const [semester, setSemester] = useState("")
    const [formTitle, setFormTitle] = useState("First Makeup")

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
            <div className="container" style={{
                background: `linear-gradient(90deg, #4F4381, #8D81C7)`,
                color: '#fff',
            }}>
                <h1>Request</h1>
            </div>
            <label htmlFor="courses">Select Exam Type</label>
            <select id="courses" name="courses" value={selectedValue} onChange={handleChange}>
                <option value="api/student/RegisterFirstMakeup">First Makeup</option>
                <option value="api/student/RegisterSecondMakeup">SecondMakeup</option>
            </select>
            <form onSubmit={handleSubmit}>
                <h1> {formTitle} Registration Form</h1>
                <h5>Course ID</h5>
                <input value={course} onChange={handleCourseChange} type="text" />
                <h5>Current Semester</h5>
                <input value={semester} onChange={handleSemesterChange} type="text" />
                <CustomButton disabled={!course || !semester} type="submit" label="Submit" />
                <h3>{selectedValue}</h3>
                <h3>{course}</h3>
                <h3>{semester}</h3>
                <h3>{props.id}</h3>
            </form>
            <CustomTable apistring="api/view/CoursesMakeupExam" id={props.id} semester={semester} />
        </div>
    );
};

export default StudentExam;



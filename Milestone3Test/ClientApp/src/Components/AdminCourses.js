
import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom'
import React, { useState } from 'react';
import CustomTable from './CustomTable'
import CustomButton from './CustomButton'
const AdminCourses = (props) => {
    const [major, setmajor] = useState("")
    const [semester, setsemester] = useState("")
    const [credithours, setcredithours] = useState("")
    const [name, setname] = useState("")
    const [isoffered, setisoffered] = useState("")


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
            <h1>All Courses</h1>
            <CustomTable apistring="api/view/CoursesSlotsInstructor" />
            <form onSubmit={handleSubmit}>
                <h1> Add A Course</h1>
                <h5>Major</h5>
                <input value={major} onChange={handleMajor} type="text" />
                <h5>Semester</h5>
                <input value={semester} onChange={handleSemester} type="text" />
                <h5>Credit Hours</h5>
                <input value={credithours} onChange={handleCredits} type="text" />
                <h5>Course Name</h5>
                <input value={name} onChange={handleName} type="text" />
                <h5>Is Offered</h5>
                <input value={isoffered} onChange={handleisoffered} type="text" />
                <CustomButton disabled={!major || !semester || !credithours || !name || !isoffered} type="submit" label="Submit" />
            </form>
        </div>

    );
};

export default AdminCourses ;



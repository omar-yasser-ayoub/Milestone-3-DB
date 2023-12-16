
import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom'
import React, { useState } from 'react';
import CustomTable from './CustomTable'
import CustomButton from './CustomButton'

const AdminStudents = (props) => {
    const [course, setCourse] = useState("")
    const [instructor, setInstructor] = useState("")
    const [student, setStudent] = useState("")
    const [semester, setSemester] = useState("")
    const [studentID, setStudentID] = useState("")
    const [advisorID, setAdvisorID] = useState("")


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
            <h1>All Students</h1>
            <CustomTable apistring="api/admin/ListStudents" />
            <div>
                <form onSubmit={handleSubmit}>
                    <h1>Link Student to Course</h1>
                    <h5>Course ID</h5>
                    <input value={course} onChange={handleCourse} type="text" />
                    <h5>Instructor ID</h5>
                    <input value={instructor} onChange={handleInstructor} type="text" />
                    <h5>Student ID</h5>
                    <input value={student} onChange={handleStudent} type="text" />
                    <h5>Semester Code</h5>
                    <input value={semester} onChange={handleSemester} type="text" />
                    <CustomButton disabled={!course || !semester || !instructor || !student } type="submit" label="Submit" />
                </form>
                <form onSubmit={handleSubmit2}>
                    <h1>Link Student to Advisor</h1>
                    <h5>Advisor ID</h5>
                    <input value={advisorID} onChange={handleAdvisorID} type="text" />
                    <h5>Student ID</h5>
                    <input value={studentID} onChange={handleStudentID} type="text" />
                    
                    <CustomButton disabled={!studentID || !advisorID} type="submit" label="Submit" />
                </form>
            </div>
        </div>
    );
};

export default AdminStudents;



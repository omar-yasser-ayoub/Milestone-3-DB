
import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom'
import React, { useState } from 'react';
import CustomTable from './CustomTable'
import CustomButton from './CustomButton'

const AdminInstructors = (props) => {
    const [course, setCourse] = useState("")
    const [instructor, setInstructor] = useState("")
    const [slot, setSlot] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault();


        fetch("api/admin/LinkInstructor", {
            method: 'POST',
            headers: {
                'cours_id': course,
                'instructor_id': instructor,
                'slot_id': slot
            },
        });

        setCourse("")
        setInstructor("")
        setSlot("")
        //logic for form submission
    }
    const handleCourse = (e) => {
        e.preventDefault();
        setCourse(e.target.value);
    }
    const handleInstructor = (e) => {
        e.preventDefault();
        setInstructor(e.target.value);
    }
    const handleSlot = (e) => {
        e.preventDefault();
        setSlot(e.target.value);
    }
    
    return (
        <div>
            <h1>All Instructors</h1>
            <CustomTable apistring="api/view/InstructorAssignedCourses" />
            <div>
                <form onSubmit={handleSubmit}>
                    <h1>Link Instructor to Course</h1>
                    <h5>Course ID</h5>
                    <input value={course} onChange={handleCourse} type="text" />
                    <h5>Instructor ID</h5>
                    <input value={instructor} onChange={handleInstructor} type="text" />
                    <h5>Slot ID</h5>
                    <input value={slot} onChange={handleSlot} type="text" />
                    <CustomButton disabled={!course || !instructor || !slot } type="submit" label="Submit" />
                </form>
            </div>
        </div>
    );
};

export default AdminInstructors;



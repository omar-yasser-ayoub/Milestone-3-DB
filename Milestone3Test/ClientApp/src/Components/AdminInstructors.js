
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
            <h3 className="centeredH3">All Instructors</h3>
            <CustomTable apistring="api/view/InstructorAssignedCourses" />
            <div className="box">
                <form onSubmit={handleSubmit}>
                    <h3>Link Instructor to Course</h3>
                    <h6>Course ID</h6>
                    <input value={course} onChange={handleCourse} type="text" class="form-control" placeholder="Type here..." />
                    <h6>Instructor ID</h6>
                    <input value={instructor} onChange={handleInstructor} type="text" class="form-control" placeholder="Type here..." />
                    <h6>Slot ID</h6>
                    <input value={slot} onChange={handleSlot} type="text" class="form-control" placeholder="Type here..." />
                    <CustomButton disabled={!course || !instructor || !slot } type="submit" label="Submit" />
                </form>
            </div>
        </div>
    );
};

export default AdminInstructors;



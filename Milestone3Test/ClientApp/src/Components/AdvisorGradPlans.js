import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom'
import React from 'react';
import { useState, useEffect } from 'react';
import CustomButton from './CustomButton'
const AdvisorGradPlans = (props) => {
    
    const [apistring, setApistring] = useState("api/advisor/CreateGP")
    const [one, setOne] = useState("")
    const [two, setTwo] = useState("")
    const [three, setThree] = useState("")
    const [four, setFour] = useState("")

    const handleChange = (event) => {
        setApistring(event.target.value);
        setOne("");
        setTwo("");
        setThree("");
        setFour("");
    };
    const handleCreateGP = (e) => {
        e.preventDefault();
        fetch(apistring, {
            method: 'POST',
            headers: {
                'Semester_code': four,
                'expected_graduation_date': three,
                'sem_credit_hours': two,
                'advisor_id': props.id,
                'student_id': one,
            },
        })
        setOne("");
        setTwo("");
        setThree("");
        setFour("");
    }
    const handleAddCourseGP = (e) => {
        e.preventDefault();
        fetch(apistring, {
            method: 'POST',
            headers: {
                'student_id': one,
                'Semester_code': two,
                'course_name': three
            },
        })
        setOne("");
        setTwo("");
        setThree("");
        setFour("");
    }
    const handleAddUpdateGP = (e) => {
        e.preventDefault();
        fetch(apistring, {
            method: 'POST',
            headers: {
                'expected_grad_date': two,
                'studentID': one
            },
        })
        setOne("");
        setTwo("");
        setThree("");
        setFour("");
    }
    const handleDeleteFromGP = (e) => {
        e.preventDefault();
        fetch(apistring, {
            method: 'POST',
            headers: {
                'studentID': one,
                'Semester_code': two,
                'courseID': three
            },
        })
        setOne("");
        setTwo("");
        setThree("");
        setFour("");
    }
    const handleOne = (e) => {
        setOne(e.target.value);
    }
    const handleTwo = (e) => {
        setTwo(e.target.value);
    }
    const handleThree = (e) => {
        setThree(e.target.value);
    }
    const handleFour = (e) => {
        setFour(e.target.value);
    }
    
    return (
        <div>
            <select id="courses" name="courses" value={apistring} onChange={handleChange}>
                <option value="">Select...</option>
                <option value="api/advisor/CreateGP">Insert Graduation Plan</option>
                <option value="api/advisor/AddCourseGP">Insert Courses</option>
                <option value="api/advisor/UpdateGP">Update Graduation Date</option>
                <option value="api/advisor/DeleteFromGP">Delete Courses</option>
                {/* Add more options as needed */}
            </select>
            {apistring === "api/advisor/CreateGP" ? (
                <div>
                    <form onSubmit={handleCreateGP}>
                        <h1>Create Graduation Plan </h1>
                        <h5>Student ID</h5>
                        <input value={one} onChange={handleOne} type="text" />
                        <h5>Semester Credit Hours</h5>
                        <input value={two} onChange={handleTwo} type="text" />
                        <h5>Excpected Graduation Date</h5>
                        <input value={three} onChange={handleThree} type="text" />
                        <h5>Semester Code</h5>
                        <input value={four} onChange={handleFour} type="text" />
                        <CustomButton disabled={!one || !two || !three || !four} type="submit" label="Submit" />
                        
                    </form>
                </div>
            ) : null}
            {apistring === "api/advisor/AddCourseGP" ? (
                <div>
                    <form onSubmit={handleAddCourseGP}>
                        <h1> Add Course To Graduation Plan</h1>
                        <h5>Student ID</h5>
                        <input value={one} onChange={handleOne} type="text" />
                        <h5>Semester Code</h5>
                        <input value={two} onChange={handleTwo} type="text" />
                        <h5>Course Name</h5>
                        <input value={three} onChange={handleThree} type="text" />
                        
                        <CustomButton disabled={!one || !two || !three} type="submit" label="Submit" />
                        
                    </form>
                </div>
            ) : null}
            {apistring === "api/advisor/UpdateGP" ? (
                <div>
                    <form onSubmit={handleAddUpdateGP}>
                        <h1> Update Graduation Plan Date</h1>
                        <h5>Student ID</h5>
                        <input value={one} onChange={handleOne} type="text" />
                        <h5>Excpected Graduation Date</h5>
                        <input value={two} onChange={handleTwo} type="text" />
                 
                        <CustomButton disabled={!one || !two } type="submit" label="Submit" />
                        
                    </form>
                </div>
            ) : null}
            {apistring === "api/advisor/DeleteFromGP" ? (
                <div>
                    <form onSubmit={handleDeleteFromGP}>
                        <h1> Delete Course From Graduation Plan</h1>
                        <h5>Student ID</h5>
                        <input value={one} onChange={handleOne} type="text" />
                        <h5>Semester Code</h5>
                        <input value={two} onChange={handleTwo} type="text" />
                        <h5>Course ID</h5>
                        <input value={three} onChange={handleThree} type="text" />
                        
                        <CustomButton disabled={!one || !two || !three} type="submit" label="Submit" /> 
                    </form>
                </div>
            ) : null}

            
        </div>
    );
};

export default AdvisorGradPlans;
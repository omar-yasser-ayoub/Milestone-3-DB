import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom'
import React from 'react';
import { useState, useEffect } from 'react';
import CustomButton from './CustomButton';
import { Alert, UncontrolledAlert, Button } from 'reactstrap';
const AdvisorGradPlans = (props) => {
    
    const [apistring, setApistring] = useState("api/advisor/CreateGP")
    const [one, setOne] = useState("")
    const [two, setTwo] = useState("")
    const [three, setThree] = useState("")
    const [four, setFour] = useState("")
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
    const handleChange = (event) => {
        setApistring(event.target.value);
        setOne("");
        setTwo("");
        setThree("");
        setFour("");
        setAlertSuccess(false);
        setAlertWarning(false);
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
        }).then(response => {
            if (!response.ok) {
                toggleWarning();
            }
            else {
                toggleSuccess();
            }
        });
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
        }).then(response => {
            if (!response.ok) {
                toggleWarning();
            }
            else {
                toggleSuccess();
            }
        });
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
        }).then(response => {
            if (!response.ok) {
                toggleWarning();
            }
            else {
                toggleSuccess();
            }
        });
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
        }).then(response => {
            if (!response.ok) {
                toggleWarning();
            }
            else {
                toggleSuccess();
            }
        });
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
            <div className="selection">
                <label htmlFor="courses">Select action</label>
                <select id="courses" name="courses" value={apistring} onChange={handleChange} className="labelledSelect">
                    <option value="api/advisor/CreateGP">Insert Graduation Plan</option>
                    <option value="api/advisor/AddCourseGP">Insert Courses</option>
                    <option value="api/advisor/UpdateGP">Update Graduation Date</option>
                    <option value="api/advisor/DeleteFromGP">Delete Courses</option>
                    {/* Add more options as needed */}
                </select>
            </div>
            {apistring === "api/advisor/CreateGP" ? (
                <div className="box">
                    <form onSubmit={handleCreateGP}>
                        <h3>Create Graduation Plan </h3>
                        <h6>Student ID</h6>
                        <input value={one} onChange={handleOne} type="text" class="form-control" placeholder="Type here..." />
                        <h6>Semester Credit Hours</h6>
                        <input value={two} onChange={handleTwo} type="text" class="form-control" placeholder="Type here..." />
                        <h6>Excpected Graduation Date</h6>
                        <input value={three} onChange={handleThree} type="text" class="form-control" placeholder="Type here..." />
                        <h6>Semester Code</h6>
                        <input value={four} onChange={handleFour} type="text" class="form-control" placeholder="Type here..." />
                        <CustomButton disabled={!one || !two || !three || !four} type="submit" label="Submit" />
                        <UncontrolledAlert isOpen={alertSuccess} toggle={closeAlertSuccess}>
                            Success! Your Request was Processed.
                        </UncontrolledAlert>
                        <UncontrolledAlert color="warning" isOpen={alertWarning} toggle={closeAlertWarning}>
                            Request failed. Please check that all of your data is correct.
                        </UncontrolledAlert>
                    </form>
                </div>
            ) : null}
            {apistring === "api/advisor/AddCourseGP" ? (
                <div className="box">
                    <form onSubmit={handleAddCourseGP}>
                        <h3> Add Course To Graduation Plan</h3>
                        <h6>Student ID</h6>
                        <input value={one} onChange={handleOne} type="text" class="form-control" placeholder="Type here..." />
                        <h6>Semester Code</h6>
                        <input value={two} onChange={handleTwo} type="text" class="form-control" placeholder="Type here..." />
                        <h6>Course Name</h6>
                        <input value={three} onChange={handleThree} type="text" class="form-control" placeholder="Type here..." />
                        
                        <CustomButton disabled={!one || !two || !three} type="submit" label="Submit" />
                        <UncontrolledAlert isOpen={alertSuccess} toggle={closeAlertSuccess}>
                            Success! Your Request was submitted.
                        </UncontrolledAlert>
                        <UncontrolledAlert color="warning" isOpen={alertWarning} toggle={closeAlertWarning}>
                            Request failed. Please check that all of your data is correct.
                        </UncontrolledAlert>
                    </form>
                </div>
            ) : null}
            {apistring === "api/advisor/UpdateGP" ? (
                <div className="box">
                    <form onSubmit={handleAddUpdateGP}>
                        <h3> Update Graduation Plan Date</h3>
                        <h6>Student ID</h6>
                        <input value={one} onChange={handleOne} type="text" class="form-control" placeholder="Type here..." />
                        <h6>Excpected Graduation Date</h6>
                        <input value={two} onChange={handleTwo} type="text" class="form-control" placeholder="Type here..." />
                 
                        <CustomButton disabled={!one || !two} type="submit" label="Submit" class="form-control" placeholder="Type here..." />
                        <UncontrolledAlert isOpen={alertSuccess} toggle={closeAlertSuccess}>
                            Success! Your Request was submitted.
                        </UncontrolledAlert>
                        <UncontrolledAlert color="warning" isOpen={alertWarning} toggle={closeAlertWarning}>
                            Request failed. Please check that all of your data is correct.
                        </UncontrolledAlert>
                    </form>
                </div>
            ) : null}
            {apistring === "api/advisor/DeleteFromGP" ? (
                <div className="box">
                    <form onSubmit={handleDeleteFromGP}>
                        <h3> Delete Course From Graduation Plan</h3>
                        <h6>Student ID</h6>
                        <input value={one} onChange={handleOne} type="text" class="form-control" placeholder="Type here..." />
                        <h6>Semester Code</h6>
                        <input value={two} onChange={handleTwo} type="text" class="form-control" placeholder="Type here..." />
                        <h6>Course ID</h6>
                        <input value={three} onChange={handleThree} type="text" class="form-control" placeholder="Type here..." />
                        
                        <CustomButton disabled={!one || !two || !three} type="submit" label="Submit" /> 
                        <UncontrolledAlert isOpen={alertSuccess} toggle={closeAlertSuccess}>
                            Success! Your Request was submitted.
                        </UncontrolledAlert>
                        <UncontrolledAlert color="warning" isOpen={alertWarning} toggle={closeAlertWarning}>
                            Request failed. Please check that all of your data is correct.
                        </UncontrolledAlert>
                    </form>
                </div>
            ) : null}

            
        </div>
    );
};

export default AdvisorGradPlans;
import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom'
import React from 'react';
import { useState, useEffect } from 'react';
import CustomButton from "./CustomButton";
import { Alert, UncontrolledAlert, Button } from 'reactstrap';

const SignUpForm = (props) => {
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [password, setPassword] = useState("");
    const [faculty, setFaculty] = useState("");
    const [email, setEmail] = useState("");
    const [major, setMajor] = useState("");
    const [semester, setSemester] = useState("");
    const [aName, setAName] = useState("");
    const [office, setOffice] = useState("");
    const [test, setTest] = useState("");
    const [isStudent, setStudent] = useState(true);
    const [title, setTitle] = useState("Student");

    const [alertSuccess, setAlertSuccess] = useState(false);
    const [alertWarning, setAlertWarning] = useState(false);
    var newId;

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

    const handleFNameChange = (e) => {
        setFName(e.target.value);
    }

    const handleLNameChange = (e) => {
        setLName(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleFacultyChange = (e) => {
        setFaculty(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handleMajorChange = (e) => {
        setMajor(e.target.value);
    }

    const handleSemesterChange = (e) => {
        setSemester(e.target.value);
    }

    const handleANameChange = (e) => {
        setAName(e.target.value);
    }

    const handleOfficeChange = (e) => {
        setOffice(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isStudent) {
            fetch("api/student/Registration", {
                method: 'POST',
                headers:
                {
                    'first_name': fName,
                    'last_name': lName,
                    'password': password,
                    'faculty': faculty,
                    'email': email,
                    'major': major,
                    'Semester': semester
                },
            })
                .then(response => {
                    if (!response.ok) {
                        toggleWarning();
                    }
                    else {
                        toggleSuccess();
                    }
                })
                /*.then(responseJson => {
                    console.log(responseJson);
                    props.setId(responseJson.studentId);
                    *//*setTest("Registered Successfully! Your ID is " + responseJson.studentId);
                    console.log(responseJson);*//*
                        *//*setTest("Welcome to the System");*//*
                        *//*toggleSuccess();*//*
                        props.setId(responseJson.studentId);
                        newId = responseJson.studentId;
                })
                .catch(error => {
                    console.error('Error:', error);
                });*/
        }

        else {
            fetch("api/advisor/RegistrationAdvisor", {
                method: 'POST',
                headers:
                {
                    'advisor_name': aName,
                    'password': password,
                    'email': email,
                    'office': office

                },
            }).then(response => {
                if (!response.ok) {
                    toggleWarning();
                }
                else {
                    toggleSuccess();
                }
            })
                /*.then(response => response.json())
                .then(responseJson => {
                    console.log(responseJson);
                    *//*props.setId(responseJson.advisorId);
                    setTest("Registered Successfully! Your ID is " + responseJson.advisorId);*//*
                    if (responseJson.success == 1) {
                        *//*setTest("Welcome to the System");*//*
                        toggleSuccess();
                        props.setId(responseJson.advisorId);
                        newId = responseJson.studentId;
                    }
                    else {
                        *//*setTest("Incorrect Password");*//*
                        toggleWarning();
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                });*/
        }
        setFName("");
        setLName("");
        setPassword("");
        setFaculty("");
        setEmail("");
        setMajor("");
        setSemester("");
        setAName("");
        setOffice("");
    }

    const handleTypeChange = (e) => {
        e.preventDefault();
        if (isStudent) {
            setStudent(false);
            setTitle("Advisor");
        }
        else {
            setStudent(true);
            setTitle("Student");
        }
        setTest("");
    }

    return (
        <div className="landing">
            <div className="box">
                <div className="inlineDivBtn">
                    <CustomButton label="Student" disabled={isStudent}
                        onClick={handleTypeChange} />
                </div>
                <div className="inlineDivBtn">
                    <CustomButton label="Advisor" disabled={!isStudent}
                        onClick={handleTypeChange} />
                </div>

                <form onSubmit={handleSubmit}>

                    <h3> {title} Sign Up Form</h3>

                    {isStudent && <h6>First Name</h6>}
                    {isStudent && <input value={fName} onChange={handleFNameChange} type="text" class="form-control" placeholder="Type here..." />}

                    {isStudent && <h6>Last Name</h6>}
                    {isStudent && <input value={lName} onChange={handleLNameChange} type="text" class="form-control" placeholder="Type here..." />}

                    {!isStudent && <h6>Name</h6>}
                    {!isStudent && <input value={aName} onChange={handleANameChange} type="text" class="form-control" placeholder="Type here..." />}

                    <h6> Password </h6>
                    <input value={password} onChange={handlePasswordChange} type="password" class="form-control" placeholder="Type here..." />

                    {isStudent && <h6> Faculty </h6>}
                    {isStudent && <input value={faculty} onChange={handleFacultyChange} type="text" class="form-control" placeholder="Type here..." />}

                    <h6> Email </h6>
                    <input value={email} onChange={handleEmailChange} type="text" class="form-control" placeholder="Type here..." />

                    {isStudent && <h6> Major </h6>}
                    {isStudent && <input value={major} onChange={handleMajorChange} type="text" class="form-control" placeholder="Type here..." />}

                    {isStudent && <h6> Semester </h6>}
                    {isStudent && <input value={semester} onChange={handleSemesterChange} type="text" class="form-control" placeholder="Type here..." />}

                    {!isStudent && <h6> Office </h6>}
                    {!isStudent && <input value={office} onChange={handleOfficeChange} type="text" class="form-control" placeholder="Type here..." />}

                    {isStudent && <CustomButton
                        disabled={!fName || !lName || !password || !faculty || !email || !major || !semester}
                        type="submit" label="Sign Up"/>}

                    {!isStudent && <CustomButton
                        disabled={!aName || !password || !email || !office}
                        type="submit" label="Sign Up"/>}

                    {/*<h1>{test}</h1>*/}
                    <UncontrolledAlert isOpen={alertSuccess} toggle={closeAlertSuccess}>
                        Registered successfully!
                    </UncontrolledAlert>
                    <UncontrolledAlert color="warning" isOpen={alertWarning} toggle={closeAlertWarning}>
                        Request failed. Please check that all of your data is correct.
                    </UncontrolledAlert>

                </form>
            </div>
        </div>
    );
}

export default SignUpForm;



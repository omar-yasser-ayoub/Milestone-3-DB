import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom'
import React from 'react';
import { useState, useEffect } from 'react';
import CustomButton from "./CustomButton";

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
                .then(response => response.json())
                .then(responseJson => {
                    console.log(responseJson);
                    props.setId(responseJson.studentId);
                    setTest("Registered Successfully! Your ID is " + responseJson.studentId);
                })
                .catch(error => {
                    console.error('Error:', error);
                });
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
            })
                .then(response => response.json())
                .then(responseJson => {
                    console.log(responseJson);
                    props.setId(responseJson.advisorId);
                    setTest("Registered Successfully! Your ID is " + responseJson.advisorId);
                })
                .catch(error => {
                    console.error('Error:', error);
                });
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
                <div>
                    <CustomButton label="Student" disabled={isStudent}
                        onClick={handleTypeChange} />

                    <CustomButton label="Advisor" disabled={!isStudent}
                        onClick={handleTypeChange} />
                </div>

                <form onSubmit={handleSubmit}>

                    <h1> {title} Sign Up Form</h1>

                    {isStudent && <h5>First Name</h5>}
                    {isStudent && <input value={fName} onChange={handleFNameChange} type="text" />}

                    {isStudent && <h5>Last Name</h5>}
                    {isStudent && <input value={lName} onChange={handleLNameChange} type="text" />}

                    {!isStudent && <h5>Name</h5>}
                    {!isStudent && <input value={aName} onChange={handleANameChange} type="text" />}

                    <h5> Password </h5>
                    <input value={password} onChange={handlePasswordChange} type="text" />

                    {isStudent && <h5> Faculty </h5>}
                    {isStudent && <input value={faculty} onChange={handleFacultyChange} type="text" />}

                    <h5> Email </h5>
                    <input value={email} onChange={handleEmailChange} type="text" />

                    {isStudent && <h5> Major </h5>}
                    {isStudent && <input value={major} onChange={handleMajorChange} type="text" />}

                    {isStudent && <h5> Semester </h5>}
                    {isStudent && <input value={semester} onChange={handleSemesterChange} type="text" />}

                    {!isStudent && <h5> Office </h5>}
                    {!isStudent && <input value={office} onChange={handleOfficeChange} type="text" />}

                    {isStudent && <CustomButton
                        disabled={!fName || !lName || !password || !faculty || !email || !major || !semester}
                        type="submit" label="Submit" />}

                    {!isStudent && <CustomButton
                        disabled={!aName || !password || !email || !office}
                        type="submit" label="Submit" />}

                    <h1>{test}</h1>

                </form>

            </div>
        </div>
    );
}

export default SignUpForm;



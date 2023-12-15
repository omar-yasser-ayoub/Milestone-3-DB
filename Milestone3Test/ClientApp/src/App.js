import { Button } from "bootstrap";
import { useEffect, useState } from "react";
import CustomButton from "./Components/CustomButton";
import Navbar from "./Components/Navbar";
import LoginForm from "./Components/LoginForm";
import StudentRequest from "./Components/StudentRequest";
import StudentCourses from "./Components/StudentCourses";
import StudentPayment from "./Components/StudentPayment";
import StudentGradPlan from "./Components/StudentGradPlan";
import StudentExam from "./Components/StudentExam";
import StudentHome from "./Components/StudentHome";
import StudentInstructor from "./Components/StudentInstructor";
import AdvisorHome from "./Components/AdvisorHome";
import AdvisorStudents from "./Components/AdvisorStudents";
import AdvisorRequests from "./Components/AdvisorRequests";
import AdvisorGradPlans from "./Components/AdvisorGradPlans";
import SignUpForm from "./Components/SignUpForm"
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';

const App = () => {

    const [isLoggedIn, setLoggedIn] = useState(false);
    const [isStudentLoggedIn, setStudentLoggedIn] = useState(false);
    const [id, setId] = useState("");
    const [logIn, setLogIn] = useState(true);
    const [test, setTest] = useState([]);

    const navItemStyle = {
        marginRight: '15px',
        textDecoration: 'none',
        color: '#fff',
        fontWeight: 'bold',
    };

    useEffect(() => {
        fetch("api/student/ViewSlot", {
            method: 'POST',
            headers: {
                'CourseID': '2',
                'InstructorID': '1'
            },
        })
            .then(response => response.json())
            .then(responseJson => {
                console.log(responseJson);
                setTest(responseJson);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []);


    if (!isLoggedIn) {
        return (

            <div className="container">
                {logIn && <LoginForm setLoggedIn={setLoggedIn} setStudentLoggedIn={setStudentLoggedIn} setId={setId} />}
                {logIn && <CustomButton label="Sign Up" onClick={handleLogInChange} />}
                {!logIn && <SignUpForm setId={setId} />}
                {!logIn && <CustomButton label="Log In" onClick={handleLogInChange} />}
            </div>
        )
    }
    else {
        if (isStudentLoggedIn) {
            return (
                <div>
                    <BrowserRouter>
                        <div className="App">
                            <nav style={{ display: 'flex', backgroundColor: '#3498db', padding: '10px' }}>
                                <Link to="" style={navItemStyle}>Home</Link>
                                <Link to="/student/courses" style={navItemStyle}>Courses</Link>
                                <Link to="/student/request" style={navItemStyle}>Requests</Link>
                                <Link to="/student/gradplan" style={navItemStyle}>Graduation Plan</Link>
                                <Link to="/student/payment" style={navItemStyle}>Payments</Link>
                                <Link to="/student/exam" style={navItemStyle}>Exam</Link>
                                <Link to="/student/instructor" style={navItemStyle}>Instructor</Link>
                            </nav>
                            <Routes>
                                <Route path="" element={<StudentHome id={id} />} />
                                <Route path="/student/courses" element={<StudentCourses id={id} />} />
                                <Route path="/student/request" element={<StudentRequest id={id} />} />
                                <Route path="/student/gradplan" element={<StudentGradPlan id={id} />} />
                                <Route path="/student/payment" element={<StudentPayment id={id} />} />
                                <Route path="/student/exam" element={<StudentExam id={id} />} />
                                <Route path="/student/instructor" element={<StudentInstructor id={id} />} />
                        </Routes>
                    </div>
                    </BrowserRouter>
                </div>
            )
        }
        else {
            return (
                <BrowserRouter>
                    <div className="App">
                        <nav style={{ display: 'flex', backgroundColor: '#3498db', padding: '10px' }}>
                            <Link to="" style={navItemStyle}>Home</Link>
                            <Link to="/advisor/students" style={navItemStyle}>Students</Link>
                            <Link to="/advisor/gradplans" style={navItemStyle}>Graduation Plans</Link>
                            <Link to="/advisor/request" style={navItemStyle}>Requests</Link>
                        </nav>
                        <Routes>
                            <Route path="" element={<AdvisorHome id={id} />} />
                            <Route path="/advisor/students" element={<AdvisorStudents id={id} />} />
                            <Route path="/advisor/gradplans" element={<AdvisorGradPlans id={id} />} />
                            <Route path="/advisor/request" element={<AdvisorRequests id={id} />} /> 
                        </Routes>
                    </div>
                </BrowserRouter>
            )
        }
    }
}

export default App;
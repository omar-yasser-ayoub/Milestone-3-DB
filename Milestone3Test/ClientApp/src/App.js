import { Button } from "bootstrap";
import { useEffect, useState } from "react";
import CustomButton from "./Components/CustomButton";
import Navbar from "./Components/Navbar";
import LoginForm from "./Components/LoginForm";
import StudentRequest from "./Components/StudentRequest";
import StudentCourses from "./Components/StudentCourses";
import StudentGradPlan from "./Components/StudentGradPlan";
import StudentExam from "./Components/StudentExam";
import StudentHome from "./Components/StudentHome";
import StudentInstructor from "./Components/StudentInstructor";
import AdvisorHome from "./Components/AdvisorHome";
import AdvisorStudents from "./Components/AdvisorStudents";
import AdvisorRequests from "./Components/AdvisorRequests";
import AdvisorGradPlans from "./Components/AdvisorGradPlans";
import SignUpForm from "./Components/SignUpForm"
import { Routes, Route, Link, NavLink, BrowserRouter } from 'react-router-dom';
import './index.css';

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

    const handleLogInChange = (e) => {
        setLogIn(!logIn);
    }

    const activeNavStyle = {
        color: '#fff',
        display: 'flex',
        padding: '10px',
        textdecoration: 'underline'
    };

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
                            <nav>
                                <NavLink to="" style={navItemStyle}>Home</NavLink>
                                <NavLink to="/student/courses" style={navItemStyle}>Courses</NavLink>
                                <NavLink to="/student/request" style={navItemStyle}>Requests</NavLink>
                                <NavLink to="/student/gradplan" style={navItemStyle}>Graduation Plan</NavLink>
                                <NavLink to="/student/exam" style={navItemStyle}>Exam</NavLink>
                                <NavLink to="/student/instructor" style={navItemStyle}>Instructor</NavLink>
                            </nav>
                            <Routes>
                                <Route path="" element={<StudentHome id={id} />} />
                                <Route path="/student/courses" element={<StudentCourses id={id} />} />
                                <Route path="/student/request" element={<StudentRequest id={id} />} />
                                <Route path="/student/gradplan" element={<StudentGradPlan id={id} />} />
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
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
import AdvisorStudents from "./Components/AdvisorStudents";
import AdvisorRequests from "./Components/AdvisorRequests";
import AdvisorGradPlans from "./Components/AdvisorGradPlans";
import SignUpForm from "./Components/SignUpForm"
import AdminCourses from "./Components/AdminCourses"
import AdminSemesters from "./Components/AdminSemesters"
import AdminStudents from "./Components/AdminStudents"
import AdminInstructors from "./Components/AdminInstructors"
import AdminRequests from "./Components/AdminRequests"
import AdminAdvisors from "./Components/AdminAdvisors"
import { Routes, Route, Link, NavLink, BrowserRouter } from 'react-router-dom';
import './index.css';

const App = () => {

    const [isLoggedIn, setLoggedIn] = useState(false);
    const [isStudentLoggedIn, setStudentLoggedIn] = useState(false);
    const [isAdmin, setAdminLoggedIn] = useState(false);
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

    if (!isLoggedIn) {
        return (
            <div className="container">
                {logIn && <LoginForm setLoggedIn={setLoggedIn} setStudentLoggedIn={setStudentLoggedIn} setAdminLoggedIn={setAdminLoggedIn} setId={setId} />}
                {logIn && <div className="logsign">
                    <CustomButton label="Sign Up" onClick={handleLogInChange} />
                </div>}
                {!logIn && <SignUpForm setId={setId} />}
                {!logIn && <div className="logsign">
                    <CustomButton label="Log In" onClick={handleLogInChange} />
                </div>}
            </div>
        )
    }
    else {
        if (isAdmin) {
            return (
                <div>
                    <BrowserRouter>
                        <div className="App">
                            <nav style={{ display: 'flex', backgroundColor: '#3498db', padding: '10px' }}>
                                <Link to="/admin/advisors" style={navItemStyle}>Advisors</Link>
                                <Link to="/admin/students" style={navItemStyle}>Students</Link>
                                <Link to="/admin/requests" style={navItemStyle}>Requests</Link>
                                <Link to="/admin/semesters" style={navItemStyle}>Semesters</Link>
                                <Link to="/admin/courses" style={navItemStyle}>Courses</Link>
                                <Link to="/admin/instructors" style={navItemStyle}>Instructors</Link>
                            </nav>
                            <Routes>
                                <Route path="/admin/advisors" element={<AdminAdvisors id={id} />} />
                                <Route path="/admin/students" element={<AdminStudents id={id} />} />
                                <Route path="/admin/requests" element={<AdminRequests id={id} />} />
                                <Route path="/admin/semesters" element={<AdminSemesters id={id} />} />
                                <Route path="/admin/courses" element={<AdminCourses id={id} />} />
                                <Route path="/admin/instructors" element={<AdminInstructors id={id} />} />
                            </Routes>
                        </div>
                    </BrowserRouter>
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
                                    <Link to="/student/exam" style={navItemStyle}>Exam</Link>
                                    <Link to="/student/instructor" style={navItemStyle}>Instructor</Link>
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
                                <Link to="/advisor/students" style={navItemStyle}>Students</Link>
                                <Link to="/advisor/gradplans" style={navItemStyle}>Graduation Plans</Link>
                                <Link to="/advisor/request" style={navItemStyle}>Requests</Link>
                            </nav>
                            <Routes>
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
}

export default App;
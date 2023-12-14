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
import AdvisorHome from "./Components/AdvisorHome";
import { Routes, Route, Link , BrowserRouter} from 'react-router-dom';
const App = () => {

    const [isLoggedIn, setLoggedIn] = useState(false);
    const [isStudentLoggedIn, setStudentLoggedIn] = useState(false);
    const [id, setId] = useState("");

    const navItemStyle = {
        marginRight: '15px',
        textDecoration: 'none',
        color: '#fff',
        fontWeight: 'bold',
    };

    if (!isLoggedIn) {
        return (

            <div className="container">
                <LoginForm setLoggedIn={setLoggedIn} setStudentLoggedIn={setStudentLoggedIn} setId={setId} />
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
                                <Link to="/student/home" style={navItemStyle}>Home</Link>
                                <Link to="/student/courses" style={navItemStyle}>Courses</Link>
                                <Link to="/student/request" style={navItemStyle}>Requests</Link>
                                <Link to="/student/gradplan" style={navItemStyle}>Graduation Plan</Link>
                                <Link to="/student/payment" style={navItemStyle}>Payments</Link>
                                <Link to="/student/exam" style={navItemStyle}>Exam</Link>
                            </nav>
                            <Routes>
                                <Route path="/student/home" element={<StudentHome id={id} />} />
                                <Route path="/student/courses" element={<StudentCourses id={id} />} />
                                <Route path="/student/request" element={<StudentRequest id={id} />} />
                                <Route path="/student/gradplan" element={<StudentGradPlan id={id} />} />
                                <Route path="/student/payment" element={<StudentPayment id={id} />} />
                                <Route path="/student/exam" element={<StudentExam id={id} />} />
                        </Routes>
                    </div>
                    </BrowserRouter>
                </div>
            )
        }
        else {
            return (

                <div className="container">
                    <h1>Advisor Page</h1>
                    <h1>{id}</h1>
                    <AdvisorHome />
                </div>
            )
        }
    }
}

export default App;
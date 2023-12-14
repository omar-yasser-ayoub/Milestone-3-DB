import { Button } from "bootstrap";
import { useEffect, useState } from "react";
import CustomButton from "./Components/CustomButton";
import Navbar from "./Components/Navbar";
import LoginForm from "./Components/LoginForm";
import StudentRequest from "./Components/StudentRequest";
import StudentCourses from "./Components/StudentCourses";
import AdvisorHome from "./Components/AdvisorHome";
import { Routes, Route, Link , BrowserRouter} from 'react-router-dom';
const App = () => {

    const [courses, setCourses] = useState([]);
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [isStudentLoggedIn, setStudentLoggedIn] = useState(false);
    const [id, setId] = useState("");


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
                        <nav className="nav">
                            <Link to="/student/courses" className="nav-item">Courses</Link>
                            <Link to="/student/request" className="nav-item">Requests</Link>
                        </nav>
                        <Routes>
                            <Route path="/student/courses" element={<StudentCourses />} />
                            <Route path="/student/request" element={<StudentRequest />} />
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
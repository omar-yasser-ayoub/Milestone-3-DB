import { Button } from "bootstrap";
import { useEffect, useState } from "react";
import CustomButton from "./Components/CustomButton";
import LoginForm from "./Components/LoginForm";
const App = () => {

    /*const [courses, setCourses] = useState([]);

    const handleButtonClick = () => {
        fetch("api/student/ViewRequiredCourse", {
            method: 'POST',
            headers: {
                'StudentID': '4',
                'current_semester_code': 'W23'
            },
        })
            .then(response => response.json())
            .then(responseJson => {
                console.log(responseJson);
                setCourses(responseJson);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };*/
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [isStudentLoggedIn, setStudentLoggedIn] = useState(false);
    const [test, setTest] = useState("NOT LOGGED IN GLOBALLY");

    if (!isLoggedIn) {
        return (

            <div className="container">
                <LoginForm setLoggedIn={setLoggedIn} setStudentLoggedIn={setStudentLoggedIn} />
            </div>
        )
    }
    else {
        if (isStudentLoggedIn) {
            return (

                <div className="container">
                    <h1>Student Page</h1>
                </div>
            )
        }
        else {
            return (

                <div className="container">
                    <h1>Advisor Page</h1>
                </div>
            )
        }
    }
}

export default App;
import { useEffect, useState } from "react";

const App = () => {

    const [instructors, setInstructors] = useState([]);
    const [advisorId, setAdvisorId] = useState(null);

    const handleButtonClick = () => {
        fetch("api/student/Registration", {
            method: 'POST',
            headers: {
                'first_name': 'Farah',
                'last_name': 'Omar',
                'password': 'Farahandomar',
                'faculty': 'Chemistry',
                'email': 'farahomar',
                'major': 'Engineering Chemistry',
                'Semester': '4'

            },
        })
            .then(response => response.json())
            .then(responseJson => {
                setInstructors(responseJson)
                //setInstructors(responseJson);
                console.log(responseJson);
                setAdvisorId(responseJson.studentId);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };



    return (
        <div className="container">
            <div>
                <h1>Advisor ID: {advisorId}</h1>
            </div>

            <h1>Instructors</h1>
            <button onClick={handleButtonClick}>Click me</button>
            <div className="row">
                <div className="col-sm-12">
                    <table>
                        <thead className="table table-stripped">
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Office</th>
                                <th>Password</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                /*instructors.map((instructor) => (
                                    <tr>
                                        <td>{instructor.semester_code}</td>
                                        <td>{instructor.start_date}</td>
                                        <td>{instructor.end_date}</td>
                                    </tr>
                                ))*/
                            } 
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default App;
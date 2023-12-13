import { useEffect, useState } from "react";

const App = () => {

    const [students, setStudents] = useState([]);

    const handleButtonClick = () => {
        fetch("api/admin/ListStudentsWithAdvisors", {
            method: 'POST',
            headers: {
                //'Advisor_ID': '1'
            },
        })
            .then(response => response.json())
            .then(responseJson => {
                console.log(responseJson);
                setStudents(responseJson);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };



    return (
        <div className="container">
            <h1>Students With Advisors</h1>
            <button onClick={handleButtonClick}>Click me</button>
            <div className="row">
                <div className="col-sm-12">
                    <table>
                        <thead className="table table-stripped">
                            <tr>
                                <th>Student ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Advisor ID</th>
                                <th>Advisor Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                students.map((student) => (
                                    <tr>
                                        <td>{student.studentId}</td>
                                        <td>{student.fName}</td>
                                        <td>{student.lName}</td>
                                        <td>{student.advisorId}</td>
                                        <td>{student.advisorName}</td>
                                    </tr>
                                ))
                            } 
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default App;
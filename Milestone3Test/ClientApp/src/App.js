import { useEffect, useState } from "react";

const App = () => {

    const [students, setStudents] = useState([]);

    const handleButtonClick = () => {
        fetch("api/admin/ListStudents", {
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
            <h1>Students</h1>
            <button onClick={handleButtonClick}>Click me</button>
            <div className="row">
                <div className="col-sm-12">
                    <table>
                        <thead className="table table-stripped">
                            <tr>
                                <th>Student ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Password</th>
                                <th>GPA</th>
                                <th>Faculty</th>
                                <th>Email</th>
                                <th>Major</th>
                                <th>Financial Status</th>
                                <th>Semester</th>
                                <th>Acquired Hours</th>
                                <th>Assigned Hours</th>
                                <th>Advisor ID</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                students.map((s) => (
                                    <tr>
                                        <td>{s.studentId}</td>
                                        <td>{s.fName}</td>
                                        <td>{s.lName}</td>
                                        <td>{s.password}</td>
                                        <td>{s.gpa}</td>
                                        <td>{s.faculty}</td>
                                        <td>{s.email}</td>
                                        <td>{s.major}</td>
                                        <td>{s.financialStatus}</td>
                                        <td>{s.emester}</td>
                                        <td>{s.acquiredHours}</td>
                                        <td>{s.assignedHours}</td>
                                        <td>{s.advisorId}</td>
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
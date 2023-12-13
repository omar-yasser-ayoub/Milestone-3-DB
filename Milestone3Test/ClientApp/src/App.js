import { useEffect, useState } from "react";

const App = () => {

    const [students, setStudents] = useState([]);

    const handleButtonClick = () => {
        fetch("api/advisor/ViewAssignedStudents", {
            method: 'POST',
            headers: {
                'AdvisorID': '1',
                'major': 'CS'
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
            <h1>Assigned Students</h1>
            <button onClick={handleButtonClick}>Click me</button>
            <div className="row">
                <div className="col-sm-12">
                    <table>
                        <thead className="table table-stripped">
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Major</th>
                                <th>Course Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                students.map((student) => (
                                    <tr>
                                        <td>{student.student_id}</td>
                                        <td>{student.student_name}</td>
                                        <td>{student.major}</td>
                                        <td>{student.course_name}</td>
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
import { useEffect, useState } from "react";

const App = () => {

    const [instructors, setInstructors] = useState([])

    const handleButtonClick = () => {
        fetch("api/advisor/AddGP", {
            method: 'POST',
            headers: {
                'Semester_code': 'W23',
                'expected_graduation_date': '2024-01-31',
                'sem_credit_hours': '90',
                'advisor_id': '1',
                'student_id': '4'
            },
        })
            .then(response => response.json())
            .then(responseJson => {
                setInstructors(responseJson)
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };



    return (
        <div className="container">
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
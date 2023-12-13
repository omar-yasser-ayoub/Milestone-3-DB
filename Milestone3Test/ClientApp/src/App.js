import { useEffect, useState } from "react";

const App = () => {

    const [instructors, setInstructors] = useState([])

    const handleButtonClick = () => {
        fetch("api/advisor/DeleteFromGP", {
            method: 'POST',
            headers: {
                'studentID': '2',
                'sem_code': 'W23',
                'courseID': '1'
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
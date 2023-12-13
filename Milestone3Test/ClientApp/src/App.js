import { useEffect, useState } from "react";

const App = () => {

    const [instructors, setInstructors] = useState([]);
    const [advisorId, setAdvisorId] = useState(null);

    const handleButtonClick = () => {
        fetch("api/advisor/RegistrationAdvisor", {
            method: 'POST',
            headers: {
                'advisor_name': 'Dr. Carter',
                'password': 'password3',
                'email': 'carter@example.com',
                'office': 'Office C'
            },
        })
            .then(response => response.json())
            .then(responseJson => {
                setInstructors(responseJson)
                //setInstructors(responseJson);
                console.log(responseJson);
                setAdvisorId(responseJson.advisorId);
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
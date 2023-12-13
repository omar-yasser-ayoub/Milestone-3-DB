import { useEffect, useState } from "react";

const App = () => {

    const [advisors, setAdvisors] = useState([]);

    const handleButtonClick = () => {
<<<<<<< HEAD
        fetch("api/advisor/LoginRequest", {
=======
        fetch("api/admin/ListAdvisors", {
>>>>>>> 6a83c07 (Implemented ListAdvisors)
            method: 'POST',
            headers: {
                'username': '1',
                'password': 'pass123'
            },
        })
            .then(response => response.json())
            .then(responseJson => {
                console.log(responseJson);
                setAdvisors(responseJson);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };



    return (
        <div className="container">
<<<<<<< HEAD
            <h1>Students With Advisors {students.success}</h1>
=======
            <h1>Advisors</h1>
>>>>>>> 6a83c07 (Implemented ListAdvisors)
            <button onClick={handleButtonClick}>Click me</button>
            <div className="row">
                <div className="col-sm-12">
                    <table>
                        <thead className="table table-stripped">
                            <tr>
                                <th>Advisor ID</th>
                                <th>Advisor Name</th>
                                <th>Email</th>
                                <th>Office</th>
                                <th>Password</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
<<<<<<< HEAD
                                /*students.map((student) => (
=======
                                advisors.map((advisor) => (
>>>>>>> 6a83c07 (Implemented ListAdvisors)
                                    <tr>
                                        <td>{advisor.advisorId}</td>
                                        <td>{advisor.advisorName}</td>
                                        <td>{advisor.email}</td>
                                        <td>{advisor.office}</td>
                                        <td>{advisor.password}</td>
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
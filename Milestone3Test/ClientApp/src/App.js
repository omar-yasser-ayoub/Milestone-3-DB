import { useEffect, useState } from "react";

const App = () => {

    const [advisors, setAdvisors] = useState([]);

    const handleButtonClick = () => {
        fetch("api/admin/ListAdvisors", {
            method: 'POST',
            headers: {
                //'Advisor_ID': '1'
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
            <h1>Advisors</h1>
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
                                advisors.map((advisor) => (
                                    <tr>
                                        <td>{advisor.advisorId}</td>
                                        <td>{advisor.advisorName}</td>
                                        <td>{advisor.email}</td>
                                        <td>{advisor.office}</td>
                                        <td>{advisor.password}</td>
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
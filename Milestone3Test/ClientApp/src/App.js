import { useEffect, useState } from "react";

const App = () => {

    const [requests, setRequests] = useState([]);

    const handleButtonClick = () => {
        fetch("api/advisor/ViewPendingRequests", {
            method: 'POST',
            headers: {
                'Advisor_ID': '1'
            },
        })
            .then(response => response.json())
            .then(responseJson => {
                console.log(responseJson);
                setRequests(responseJson);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };



    return (
        <div className="container">
            <h1>Pending Requests</h1>
            <button onClick={handleButtonClick}>Click me</button>
            <div className="row">
                <div className="col-sm-12">
                    <table>
                        <thead className="table table-stripped">
                            <tr>
                                <th>Request ID</th>
                                <th>Type</th>
                                <th>Comment</th>
                                <th>Status</th>
                                <th>Credits</th>
                                <th>Course ID</th>
                                <th>Student ID</th>
                                <th>Advisor ID</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                requests.map((request) => (
                                    <tr>
                                        <td>{request.requestId}</td>
                                        <td>{request.type}</td>
                                        <td>{request.comment}</td>
                                        <td>{request.status}</td>
                                        <td>{request.creditHours}</td>
                                        <td>{request.courseId}</td>
                                        <td>{request.studentId}</td>
                                        <td>{request.advisorId}</td>
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
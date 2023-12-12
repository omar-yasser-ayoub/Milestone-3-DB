import { useEffect, useState } from "react";

const App = () => {

    const [instructors, setInstructors] = useState([])

    useEffect(() => {
        fetch("api/admin/IssueInstallment", {
            method: 'POST',
            headers: {
                'payment_id': '2'
            },
        })
            .then(response => { return response.json() })
            .then(responseJson => {
                setInstructors(responseJson)
            })
    }, [])*/

        const handleButtonClick = () => {
            fetch("api/admin/AddExam", {
                method: 'POST',
                headers: {
                    'type_1': 'Second Makeup',
                    'date_1': '2037-1-2',
                    'courseID_1': '1'
                },
            })
                .then(response => response.json())
                .then(responseJson => {
                    setInstructors(responseJson);
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
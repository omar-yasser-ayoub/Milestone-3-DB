import { useEffect, useState } from "react";

const App = () => {

    const [instructors, setInstructors] = useState([])

    useEffect(() => {
        fetch("api/admin/AddSemester", {
            method: 'POST',
            headers: {
                'startDate': '2030-10-01',
                'endDate': '2031-11-15',
                'semesterCode': 'TEST'
            },
        })
            .then(response => { return response.json() })
            .then(responseJson => {
                setInstructors(responseJson)
            })
    }, [])


    return (
        <div className="container">
            <h1>Instructors</h1>
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
                                instructors.map((instructor) => (
                                    <tr>
                                        <td>{instructor.semester_code}</td>
                                        <td>{instructor.start_date}</td>
                                        <td>{instructor.end_date}</td>
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
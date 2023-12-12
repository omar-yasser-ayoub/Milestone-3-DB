import { useEffect, useState } from "react";

const App = () => {

    const [instructors, setInstructors] = useState([])

    useEffect(() => {
        fetch("api/admin/LinkStudent", {
            method: 'POST',
            headers: {
                'cours_id': '2',
                'instructor_id': '1',
                'studentID': '4',
                'semester_code': 'W23'
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
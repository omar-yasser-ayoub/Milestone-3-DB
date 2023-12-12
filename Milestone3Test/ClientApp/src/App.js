import { useEffect, useState } from "react";

const App = () => {

    const [instructors, setInstructors] = useState([])

    useEffect(() => {
        fetch("api/admin/AddExam", {
            method: 'POST',
            headers: {
                'Type': 'Second Makeup',
                'date': '2023-02-10',
                'coureID': 1
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
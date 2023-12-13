import { useEffect, useState } from "react";

const App = () => {

    const [courses, setCourses] = useState([]);

    const handleButtonClick = () => {
        fetch("api/student/ViewOptionalCourse", {
            method: 'POST',
            headers: {
                'StudentID': '2',
                'current_semester_code': 'W23'
            },
        })
            .then(response => response.json())
            .then(responseJson => {
                console.log(responseJson);
                setCourses(responseJson);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    return (
        <div className="container">
            <h1>Optional Courses</h1>
            <button onClick={handleButtonClick}>Click me</button>
            <div className="row">
                <div className="col-sm-12">
                    <table>
                        <thead className="table table-stripped">
                            <tr>
                                <th>Course ID</th>
                                <th>Course Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                courses.map((c) => (
                                    <tr>
                                        <td>{c.courseId}</td>
                                        <td>{c.name}</td>
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
import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom'
import { React, useState, useEffect } from 'react';
import CustomTable from "./CustomTable"

const StudentCourses = (props) => {
    // State to manage the selected value
    const [selectedValue, setSelectedValue] = useState('api/student/ViewOptionalCourse');
    const [semester, setSemester] = useState('W23');
    const [semList, setSemList] = useState([]);

    // Handler function to update the selected value
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };
    const handleSemesterChange = (event) => {
        setSemester(event.target.value);
    };

    useEffect(() => {
        fetch("api/student/GetSemCodes", {
            method: 'POST',
            headers: {

            },
        })
            .then(response => response.json())
            .then(responseJson => {
                console.log(responseJson);
                setSemList(responseJson);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []);

    return (
        <div>
            <div>
                <div className="selection">
                    {/*<label htmlFor="courses">Select a course:</label>*/}
                    <select id="courses" name="courses" value={selectedValue} onChange={handleChange}>
                        {/*<option value="">Select...</option>*/}
                        <option value="api/student/ViewOptionalCourse">View Optional Courses</option>
                        <option value="api/student/ViewAvailableCourses">View Available Courses</option>
                        <option value="api/student/ViewRequiredCourse">View Required Courses</option>
                        <option value="api/student/ViewMS">View Missing Courses</option>
                        <option value="api/view/viewCoursePrerequisites">View Course Prerequisites</option>
                        <option value="api/view/CoursesSlotsInstructor">View All Courses</option>
                        {/* Add more options as needed */}
                    </select>
                    <select id="semester" name="semester" value={semester} onChange={handleSemesterChange}>
                        {/*<option value="W23">Winter 2023</option>
                        <option value="W24">Winter 2024</option>*/}
                        {semList.length > 0 && semList.map((semesterOption) => (
                            <option key={semesterOption} value={semesterOption.semester_code}>
                                {semesterOption.semester_code}
                            </option>
                        ))}
                    </select>
                    {/* Display the selected value */}
                </div>
                    <CustomTable apistring={selectedValue} id={props.id} semester={semester} />
            </div>


        </div>
    );
};

export default StudentCourses;
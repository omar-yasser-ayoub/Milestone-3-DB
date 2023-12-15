import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom'
import { React, useState } from 'react';
import CustomTable from "./CustomTable"

const StudentCourses = (props) => {
    // State to manage the selected value
    const [selectedValue, setSelectedValue] = useState('api/student/ViewMS');
    const [semester, setSemester] = useState('W23');

    // Handler function to update the selected value
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };
    const handleSemesterChange = (event) => {
        setSemester(event.target.value);
    };
    return (
        <div>
            <div className="container" style={{
                 background: `linear-gradient(90deg, #4F4381, #8D81C7)`,
                color: '#fff',
            }}>
                <h1>Courses</h1>
            </div>
            <div>
                <div>
                    <label htmlFor="courses">Select a course:</label>
                    <select id="courses" name="courses" value={selectedValue} onChange={handleChange}>
                        <option value="">Select...</option>
                        <option value="api/student/ViewOptionalCourse">View Optional Courses</option>
                        <option value="api/student/ViewAvailableCourses">View Available Courses</option>
                        <option value="api/student/ViewRequiredCourse">View Required Courses</option>
                        <option value="api/student/ViewMS">View Missing Courses</option>
                        <option value="api/view/viewCoursePrerequisites">View Course Prerequisites</option>
                        <option value="api/view/CoursesSlotsInstructor">View All Courses</option>
                        {/* Add more options as needed */}
                    </select>
                    <select id="semester" name="semester" value={semester} onChange={handleSemesterChange}>
                        <option value="">Select...</option>
                        <option value="W23">Winter 2023</option>
                        <option value="W24">Winter 2024</option>
                        {/* Add more options as needed */}
                    </select>
                    <p>You selected: {selectedValue}</p>
                    <p>You selected: {semester}</p>
                    <CustomTable apistring={selectedValue} id={props.id} semester={semester} />
                    {/* Display the selected value */}
                    
                </div>
            </div>


        </div>
    );
};

export default StudentCourses;
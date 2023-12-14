import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom'
import { React, useState } from 'react';
import Select from 'react-select';

const StudentCourses = (props) => {
    // State to manage the selected value
    const [selectedValue, setSelectedValue] = useState('');

    // Handler function to update the selected value
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
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
                    {/*<select id="courses" name="courses" value={selectedValue} onChange={handleChange}>
                        <option value="">Select...</option>
                        <option value="ViewOptionalCourses">View Optional Courses</option>
                        <option value="available">View Available Courses</option>
                        <option value="required">View Required Courses</option>
                        <option value="missing">View Missing Courses</option>
                        <option value="course">View Course Prerequisites</option>
                        <option value="slots">View Slots</option>
                        */}{/* Add more options as needed */}{/*
                    </select>*/}

                    {/* Display the selected value */}
                    <p>You selected: {selectedValue}</p>
                </div>
            </div>


        </div>
    );
};

export default StudentCourses;
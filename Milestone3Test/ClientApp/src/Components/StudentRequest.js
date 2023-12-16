import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom'
import React, { useState } from 'react';
import CustomButton from "./CustomButton";

const StudentRequest = (props) => {
    const [selectedValue, setValue] = useState("api/student/SendingCourseRequest")
    const [courseORch, setCourseORch] = useState("")
    const [comment, setComment] = useState("")
    const [formTitle, setFormTitle] = useState("Course")
    const [formPart, setFormPart] = useState("Course ID")

    const handleChange = (e) => {
        setValue(e.target.value);

        // Use e.target.value instead of selectedValue
        if (e.target.value === "api/student/SendingCourseRequest") {
            setFormTitle("Course");
            setFormPart("Course ID");
        } else {
            setFormTitle("Credit Hour");
            setFormPart("Credit Hours");
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        

        fetch(selectedValue, {
            method: 'POST',
            headers: {
                'StudentID': props.id,
                'creditCourse': courseORch,
                'type': formTitle,
                'comment': comment
            },
        });

        setCourseORch("")
        setComment("")
        //logic for form submission
    }
    const handleCHChange = (e) => {
        e.preventDefault();
        setCourseORch(e.target.value);
    }
    const handlecommentChange = (e) => {
        e.preventDefault();
        setComment(e.target.value);
    }

    return (
        <div>
            <div className="selection">
                <label htmlFor="courses">Select Request Type</label>
                <select id="courses" name="courses" value={selectedValue} onChange={handleChange} className="labelledSelect">
                    <option value="api/student/SendingCourseRequest">Course Request</option>
                    <option value="api/student/SendingCHRequest">Credit Hour Request</option>
                </select>
            </div>
            <div className="box">
                <form onSubmit={handleSubmit}>
                    <h3> {formTitle} Request Form</h3>
                    <h6>{formPart}</h6>
                    <input value={courseORch} onChange={handleCHChange} type="text" class="form-control" placeholder="Type here..." />
                    <h6>Comment</h6>
                    <input value={comment} onChange={handlecommentChange} type="text" class="form-control" placeholder="Type here.." />
                    <CustomButton disabled={!courseORch || !comment} type="submit" label="Submit" />
                </form>
            </div>
        </div>
    );
};

export default StudentRequest;



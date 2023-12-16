import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom'
import React, { useState } from 'react';
import CustomButton from "./CustomButton";
import { Alert, UncontrolledAlert, Button } from 'reactstrap';

const StudentRequest = (props) => {
    const [selectedValue, setValue] = useState("api/student/SendingCourseRequest")
    const [courseORch, setCourseORch] = useState("")
    const [comment, setComment] = useState("")
    const [formTitle, setFormTitle] = useState("Course")
    const [formPart, setFormPart] = useState("Course ID")

    const [alertSuccess, setAlertSuccess] = useState(false);
    const [alertWarning, setAlertWarning] = useState(false);

    const toggleSuccess = () => {
        if (alertSuccess) {
            return
        }
        if (alertWarning) {
            closeAlertWarning();
        }
        setAlertSuccess(!alertSuccess);
    };
    const closeAlertSuccess = () => {
        setAlertSuccess(false);
    }
    const toggleWarning = () => {
        if (alertWarning) {
            return
        }
        if (alertSuccess) {
            closeAlertSuccess();
        }
        setAlertWarning(!alertWarning);
    };
    const closeAlertWarning = () => {
        setAlertWarning(false);
    }


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
        }).then(response => {
            if (!response.ok) {
                toggleWarning();
            }
            else {
                toggleSuccess();
            }
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
                <UncontrolledAlert isOpen={alertSuccess} toggle={closeAlertSuccess}>
                    Success! Your Request was submitted.
                </UncontrolledAlert>
                <UncontrolledAlert color="warning" isOpen={alertWarning} toggle={closeAlertWarning}>
                    Request failed. Please check that all of your data is correct.
                </UncontrolledAlert>
            </div>
        </div>
    );
};

export default StudentRequest;



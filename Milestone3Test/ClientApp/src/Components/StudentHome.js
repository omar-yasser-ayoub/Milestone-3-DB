
import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom'
import React, { useState, useEffect } from 'react';
import CustomButton from './CustomButton';
import StudentPayment from "./StudentPayment";
import { Alert, UncontrolledAlert, Button } from 'reactstrap';

const StudentExam = (props) => {
const [phone, setPhone] = useState("");

    const handlePhone = (e) => {
        setPhone(e.target.value)
    }

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

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("api/student/AddMobile", {
            method: 'POST',
            headers: {
                'StudentID': props.id,
                'mobile_number': phone
            },
        }).then(response => {
            if (!response.ok) {
                toggleWarning();
            }
            else {
                toggleSuccess();
            }
        });

        setPhone("");
    }

    return (
        <div>
            <h1 className="welcome">Welcome, Student {props.id}</h1>
            <div className="box">
                <form onSubmit={handleSubmit}>
                    <h3>Add Phone</h3>
                    <input id="phoneInput" value={phone} onChange={handlePhone} type="text" class="form-control" placeholder="Type here..." />
                    <CustomButton disabled={!phone} type="submit" label="Submit" />
                </form>
                <UncontrolledAlert color="warning" isOpen={alertWarning} toggle={closeAlertWarning}>
                    Incorrect username or password.
                </UncontrolledAlert>
            </div>
            <StudentPayment id={props.id} />
        </div>
    );
};

export default StudentExam;



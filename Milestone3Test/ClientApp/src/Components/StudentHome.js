
import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom'
import React, { useState, useEffect } from 'react';
import CustomButton from './CustomButton';
import StudentPayment from "./StudentPayment";
import { Alert, UncontrolledAlert, Button } from 'reactstrap';

const StudentExam = (props) => {
const [phone, setPhone] = useState("");

/*const [name, setName] = useState("");*/

    const handlePhone = (e) => {
        setPhone(e.target.value)
    }

    const [alertSuccess, setAlertSuccess] = useState(false);
    const [alertWarning, setAlertWarning] = useState(false);

    const toggleSuccess = () => {
        if (alertSuccess) {
            return
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
            {/*<div className="container" style={{
                background: `linear-gradient(90deg, #4F4381, #8D81C7)`,
                color: '#fff',
            }}>

            <h1>Home</h1>
            </div>*/}
            <h1 className="welcome">Welcome, Student {props.id}</h1>
            <div className="box">
                <form onSubmit={handleSubmit}>
                    <h3>Add Phone</h3>
                    <input id="phoneInput" value={phone} onChange={handlePhone} type="text" class="form-control" placeholder="Type here..." />
                    <CustomButton disabled={!phone} type="submit" label="Submit" />
                </form>
                <UncontrolledAlert isOpen={alertSuccess} toggle={closeAlertSuccess}>
                    Success! Your phone was added.
                </UncontrolledAlert>
                <UncontrolledAlert color="warning" isOpen={alertWarning} toggle={closeAlertWarning}>
                    Request failed. Please check that all of your data is correct.
                </UncontrolledAlert>
            </div>
            <StudentPayment id={props.id} />
        </div>
    );
};

export default StudentExam;



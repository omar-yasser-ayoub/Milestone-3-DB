
import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom'
import React, { useState, useEffect } from 'react';
import CustomButton from './CustomButton';
import StudentPayment from "./StudentPayment";
const StudentExam = (props) => {
const [phone, setPhone] = useState("");
/*const [name, setName] = useState("");*/

    const handlePhone = (e) => {
        setPhone(e.target.value)
    }

    /*useEffect(() => {
        fetch("api/student/GetName", {
            method: 'POST',
            headers: {
                'StudentID': props.id
            },
        })
            .then(response => response.json())
            .then(responseJson => {
                console.log(responseJson);
                setName(responseJson.name);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []);*/

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("api/student/AddMobile", {
            method: 'POST',
            headers: {
                'StudentID': props.id,
                'mobile_number': phone
            },
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
            </div>
            <StudentPayment id={props.id} />
        </div>
    );
};

export default StudentExam;



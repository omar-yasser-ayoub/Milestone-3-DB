
import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom'
import React, { useState } from 'react';
import CustomButton from './CustomButton';
const StudentExam = (props) => {
    const [phone, setPhone] = useState("");

    const handlePhone = (e) => {
        setPhone(e.target.value)
    }

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
            <div className="container" style={{
                background: `linear-gradient(90deg, #4F4381, #8D81C7)`,
                color: '#fff',
            }}>

            <h1>Home</h1>
            </div>
            <h1>Welcome, Student with ID {props.id}</h1>
            <form onSubmit={handleSubmit}>
                <h1>Add Phone</h1>
                <input value={phone} onChange={handlePhone} type="text" />
                <CustomButton disabled={!phone} type="submit" label="Submit" />
            </form>
            <h1>{phone}</h1>
        </div>
    );
};

export default StudentExam;



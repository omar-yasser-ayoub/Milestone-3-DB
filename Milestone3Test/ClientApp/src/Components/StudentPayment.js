
import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom'
import React, { useState, useEffect } from 'react';
import CustomTable from './CustomTable';

const StudentPayment = (props) => {

    const [upcomingInsallment, setUpcomingInstallment] = useState("")

    useEffect(() => {
        fetch("api/student/ViewUpcomingInstallment", {
            method: 'POST',
            headers: {
                'StudentID': props.id,
                'current_semester_code': props.semester
            },
        })
            .then(response => response.json())
            .then(responseJson => {
                console.log(responseJson);
                setUpcomingInstallment(responseJson);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, [props.apistring, props.semester]);


    return (
        <div>
            <h5 className="centeredH3">Your upcoming installment is due on {upcomingInsallment}</h5>
        </div>
    );
};

export default StudentPayment;



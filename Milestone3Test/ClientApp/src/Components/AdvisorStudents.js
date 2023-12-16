import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom'
import React, { useEffect, useState } from 'react';
import CustomTable from './CustomTable';

const AdvisorStudents = (props) => {
    const [major, setMajor] = useState("")
    const [apistring, setApistring] = useState("api/advisor/ViewAllAssignedStudents")

    const handleChange = (event) => {
        if (major !== event.target.value) {
            if (event.target.value === "") {
                setApistring("api/advisor/ViewAllAssignedStudents")
            }
            else {
                setApistring("api/advisor/ViewAssignedStudents")
            }
        }
        setMajor(event.target.value);
    };


    return (
        <div>
            <h3 className="centeredH3">Your Assigned Students</h3>
            <div className="selection">
                <select id="courses" name="courses" value={major} onChange={handleChange}>
                    <option value="">Select...</option>
                    <option value="CS">CSEN</option>
                    <option value="IET">IET</option>
                    <option value="DMET">DMET</option>
                    <option value="Mechatronics">Mechatronics</option>
                    <option value="Engineering Chemistry">Chemical Engineering</option>
                    {/* Add more options as needed */}
                </select>
            </div>
            <CustomTable apistring = {apistring} advisorid={props.id} major={major} />
        </div>
    );
};

export default AdvisorStudents;
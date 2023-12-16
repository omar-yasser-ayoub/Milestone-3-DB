import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom'
import React, { useEffect, useState } from 'react';
import CustomTable from './CustomTable';

const AdvisorStudents = (props) => {
    const [major, setMajor] = useState("")
    const [apistring, setApistring] = useState("api/advisor/ViewAllAssignedStudents")
    const [majorList, setMajorList] = useState([]);


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

    useEffect(() => {
        fetch("api/advisor/GetMajors", {
            method: 'POST',
            headers: {

            },
        })
            .then(response => response.json())
            .then(responseJson => {
                console.log(responseJson);
                setMajorList(responseJson);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []);


    return (
        <div>
            <h3 className="centeredH3">Assigned Students to Advisor {props.id}</h3>
            <div className="selection">
                <select id="courses" name="courses" value={major} onChange={handleChange}>
                    <option value="">View All Students</option>
                    {/*<option value="CS">CSEN</option>
                    <option value="IET">IET</option>
                    <option value="DMET">DMET</option>
                    <option value="Mechatronics">Mechatronics</option>
                    <option value="Engineering Chemistry">Chemical Engineering</option>*/}
                    {Array.from(new Set(majorList.map((m) => m.major))).map((uniqueMajor) => (
                        <option key={uniqueMajor} value={uniqueMajor}>
                            {uniqueMajor}
                        </option>
                    ))}
                </select>
            </div>
            <CustomTable apistring={apistring} advisorid={props.id} major={major} />
        </div>
    );
};

export default AdvisorStudents;
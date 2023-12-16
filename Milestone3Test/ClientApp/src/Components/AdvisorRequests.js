import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom'
import { React, useState, useEffect } from 'react';
import CustomTable from './CustomTable';
import CustomButton from './CustomButton';

const AdvisorRequests = (props) => {
    const [major, setMajor] = useState("")
    const [apistring, setApistring] = useState("api/advisor/ViewAllRequests")
    const [title, setTitle] = useState("All")
    const [reqid, setReqid] = useState("")
    const [semester, setSemester] = useState("")
    useEffect(() => {
        if (major != "") {
            setApistring("api/advisor/ViewPendingRequests")
            setTitle("Pending")
        }
        else {
            setApistring("api/advisor/ViewAllRequests")
            setTitle("All")
        }
    }, [major]);

    const handleChange = (event) => {
        setMajor(event.target.value);
    };

    const handleReqidChange = (event) => {
        setReqid(event.target.value);
    };

    const handlecommentChange = (event) => {
        setSemester(event.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("api/advisor/ApproveRejectCHRequest", {
            method: 'POST',
            headers: {
                'requestID': reqid,
                'current_sem_code': semester
            },
        }).catch(
            fetch("api/advisor/ApproveRejectCourseRequest", {
                method: 'POST',
                headers: {
                    'requestid': props.id,
                    'current_semester_code': semester
                },
            })
        )
    }

    return (
        <div>
            <div className="selection">
                <select id="courses" name="courses" value={major} onChange={handleChange}>
                    <option value="">All Requests</option>
                    <option value="CS">Pending</option>
                    {/* Add more options as needed */}
                </select>
            </div>
            <CustomTable apistring={apistring} advisorid={props.id} />
            <div className="box">
                <form onSubmit={handleSubmit}>
                    <h3> Request Processing</h3>
                    <h6>Request ID</h6>
                    <input value={reqid} onChange={handleReqidChange} type="text" class="form-control" placeholder="Type here..." />
                    <h6>Current Semester Code</h6>
                    <input value={semester} onChange={handlecommentChange} type="text" class="form-control" placeholder="Type here..." />
                    <CustomButton disabled={!reqid || !semester} type="submit" label="Submit" />
                </form>
            </div>
        </div>
        
    );
};

export default AdvisorRequests;
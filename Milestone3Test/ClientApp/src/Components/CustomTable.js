import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom'

const CustomTable = (props) => {

    const [tabledata, setTabledata] = useState([]);

    useEffect(() => {
        fetch(props.apistring, {
            method: 'POST',
            headers: {
                'StudentID': props.id,
                'current_semester_code': props.semester,
                'CourseID': props.courseid,
                'InstructorID': props.instructorid
            },
        })
            .then(response => response.json())
            .then(responseJson => {
                console.log(responseJson);
                setTabledata(responseJson);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, [props.apistring, props.semester, props.courseid, props.instructorid]);

    return (
        <div className="tableDiv">
            <table className="table table-striped table-light">
                <thead>
                    <tr className="table-active">
                        {tabledata.length > 0 &&
                            Object.keys(tabledata[0]).map((key, index) => (
                                <th key={index} scope="col">
                                    {key}
                                </th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {tabledata.map((data, index) => (
                        <tr key={index}>
                            {Object.values(data).map((value, keyIndex) => (
                                <td key={keyIndex}>{value}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CustomTable;
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
                'current_semester_code': props.semester
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
    }, []);

    return (
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
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
            <h1>{props.apistring}</h1>
            <h1>{props.id}</h1>
            <h1>{props.semester}</h1>
        </div>
    );
};

export default CustomTable;
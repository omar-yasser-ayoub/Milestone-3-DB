import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom'

const CustomTable = (props) => {
    return (
        <div>
            <table class="table table-striped">
                <thead>
                    <tr>
                        {props.columns.map((column) => {
                            return <th scope="col">{column}</th>
                        })}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default CustomTable;
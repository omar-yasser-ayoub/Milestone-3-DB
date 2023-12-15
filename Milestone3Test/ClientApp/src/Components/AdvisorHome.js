import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom'
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import AdvisorStudents from "./AdvisorStudents";
import AdvisorGradPlans from "./AdvisorGradPlans";
import AdvisorRequests from "./AdvisorRequests";

const divStyle = {
    backgroundColor: 'red',
    width: '200px',
    height: '200px',
    margin: '20px'
};

const HomeNav = (props) => {
    return (
        <div>
            <h1>Welcome, Advisor with ID {props.id}</h1>
        </div>
    );
};

export default HomeNav;
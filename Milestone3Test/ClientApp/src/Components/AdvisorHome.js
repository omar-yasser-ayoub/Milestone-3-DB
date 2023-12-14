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
            <BrowserRouter>
                <div>
                    <nav className="nav">
                        <div>
                            <Link to="/advisor/students" className="nav-item">
                                <div style={divStyle}>
                                    <h2>Students</h2>
                                </div>
                            </Link>
                        </div>
                        <div>
                            <Link to="/advisor/graduation-plans" className="nav-item">
                                <div style={divStyle}>
                                    <h2>Graduation Plans</h2>
                                </div>
                            </Link>
                        </div>
                        <div>
                            <Link to="/advisor/requests" className="nav-item">
                                <div style={divStyle}>
                                    <h2>Requests</h2>
                                </div>
                            </Link>
                        </div>
                    </nav>
                    <Routes>
                        <Route path="/advisor/students" element={<AdvisorStudents />} />
                        <Route path="/advisor/graduation-plans" element={<AdvisorGradPlans />} />
                        <Route path="/advisor/requests" element={<AdvisorRequests />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
};

export default HomeNav;
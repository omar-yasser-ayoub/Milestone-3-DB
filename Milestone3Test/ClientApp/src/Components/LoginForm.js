
import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom'
import React from 'react';
import { useState, useEffect } from 'react';
import CustomButton from "./CustomButton";
import { Alert, UncontrolledAlert, Button } from 'reactstrap';

const LoginForm = (props) => {
	const [id, setId] = useState("");
	const [pass, setPass] = useState("");
	const [test, setTest] = useState("");
	const [isStudent, setStudent] = useState(true);
	const [title, setTitle] = useState("Student");

	const [alertSuccess, setAlertSuccess] = useState(false);
	const [alertWarning, setAlertWarning] = useState(false);

	const toggleSuccess = () => {
		if (alertSuccess) {
			return
		}
		if (alertWarning) {
			closeAlertWarning();
		}
		setAlertSuccess(!alertSuccess);
	};
	const closeAlertSuccess = () => {
		setAlertSuccess(false);
	}
	const toggleWarning = () => {
		if (alertWarning) {
			return
		}
		if (alertSuccess) {
			closeAlertSuccess();
		}
		setAlertWarning(!alertWarning);
	};
	const closeAlertWarning = () => {
		setAlertWarning(false);
	}
	
	const handleIdChange = (e) => {
		setId(e.target.value);
	}
	const handlePassChange = (e) => {
		setPass(e.target.value);
	}
	const handleSubmit = (e) => {
		e.preventDefault();
		
		if (id === "admin" && pass === "admin") {
			props.setAdminLoggedIn(true)
			props.setLoggedIn(true)
			return
		}
		if (isStudent) {
			fetch("api/student/LoginRequest", {
				method: 'POST',
				headers: {
					'username': id,
					'password': pass
				},
			})
				.then(response => response.json())
				.then(responseJson => {
					console.log(responseJson);
					if (responseJson.success == 1) {
						setTest("Welcome to the System");
						props.setLoggedIn(true)
						props.setStudentLoggedIn(true)
						props.setId(id);
					}
					else {
						/*setTest("Incorrect Password");*/
						toggleWarning();
					}
				})
				.catch(error => {
					console.error('Error:', error);
				});
		}
		else {
			fetch("api/advisor/LoginRequest", {
				method: 'POST',
				headers: {
					'username': id,
					'password': pass
				},
			})
				.then(response => response.json())
				.then(responseJson => {
					console.log(responseJson);
					if (responseJson.success == 1) {
						setTest("Welcome to the System");
						props.setLoggedIn(true)
						props.setStudentLoggedIn(false)
						props.setId(id);
					}
					else {
						/*setTest("Incorrect Password");*/
						toggleWarning();
					}	
				})
				.catch(error => {
					console.error('Error:', error);
				});
		}
		setId("");
		setPass("");
	}
	const handleTypeChange = (e) => {
		e.preventDefault();
		if (isStudent) {
			setStudent(false);
			setTitle("Advisor");
		}
		else {
			setStudent(true);
			setTitle("Student");
		}
	}

	useEffect(() => {
		setTest("");
	}, [id, pass, isStudent]);

	return (

		<div className="box">
			<div className="inlineDivBtn">
				<CustomButton label="Student" disabled={isStudent} onClick={handleTypeChange} />
			</div>
			<div className="inlineDivBtn">
				<CustomButton label="Advisor" disabled={!isStudent} onClick={handleTypeChange} />
			</div>
			<form onSubmit={handleSubmit}>
				<h3> {title} Login Form</h3>
				<h6>Username</h6>
				<input value={id} onChange={handleIdChange} type="text" class="form-control" placeholder="Type here..." />
				<h6>Password</h6>
				<input value={pass} onChange={handlePassChange} type="password" class="form-control" placeholder="Type here..." />
				<CustomButton disabled={!id || !pass} type="submit" label="Log In" />
				<h5 className="centeredH3">{test}</h5>
			</form>
			<UncontrolledAlert color="warning" isOpen={alertWarning} toggle={closeAlertWarning}>
				Incorrect username or password. Please try again.
			</UncontrolledAlert>
		</div>
	);
}

export default LoginForm;




import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom'
import React from 'react';
import { useState, useEffect } from 'react';
import CustomButton from "./CustomButton";

const LoginForm = (props) => {
	const [id, setId] = useState("");
	const [pass, setPass] = useState("");
	const [test, setTest] = useState("");
	const [isStudent, setStudent] = useState(true);
	const [title, setTitle] = useState("Student");
	
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
						setTest("Incorrect Password");
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
						setTest("Incorrect Password");
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

	return (

		<div className="box">
			<CustomButton label="Student" disabled={isStudent} onClick={handleTypeChange} />
			<CustomButton label="Advisor" disabled={!isStudent} onClick={handleTypeChange} />
			<form onSubmit={handleSubmit}>
				<h1> {title} Login Form</h1>
				<h5>Username</h5>
				<input value={id} onChange={handleIdChange} type="text" />
				<h5>Password</h5>
				<input value={pass} onChange={handlePassChange} type="text" />
				<CustomButton disabled={!id || !pass} type="submit" label="Submit" />
				<h1>{test}</h1>
			</form>
		</div>
	);
}

export default LoginForm;



import React, { Component } from "react";
import {
	Form,
	Button
} from "react-bootstrap";

class SignIn extends Component {
	constructor(...args) {
		super(...args);
	
		this.state = { validated: false };
	}
	handleSubmit(event) {
		const form = event.currentTarget;
		if (this.validateEmail(event) === false) {
			event.preventDefault();
			event.stopPropagation();
		}
		this.setState({ validated: true });
	}
	validateEmail(e) {
		const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if (emailRex.test(e.target.value)) {
			return true;
		} else {
			return false;
		}
	}
	submitForm(e) {
		e.preventDefault();
		console.log(`Email: ${this.state.email}`);
	}
	render() {
		const { validated } = this.state;
		return (
			<Form 
			noValidate
			validated={validated}
			onSubmit={e => this.handleSubmit(e)}
			>
				<Form.Group controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control required type="email" placeholder="Enter email" />
					<Form.Text className="text-muted">
						We'll never share your email with anyone else.
					</Form.Text>
					<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
				</Form.Group>

				<Form.Group controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control required type="password" placeholder="Password" />
					<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
				</Form.Group>
				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		);
	}
}

export default SignIn;

import React from "react";
import ReactDOM from "react-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/scss/styles.scss";
import SignIn from './pages/SignIn';

const Index = () => {	
	return (
		<div className="text-center">
			{" "}
			Welcome to SNS React Boilerplate!
			<SignIn/>
		</div>
	);
};
ReactDOM.render(<Index />, document.getElementById("root"));

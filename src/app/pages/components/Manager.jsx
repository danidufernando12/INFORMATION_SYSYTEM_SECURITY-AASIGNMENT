import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Header from './Header';

const Manager = () => {

	const {logout, user} = useAuth0();
	const navigate = useNavigate();
	
  

	
    const managerUploadPage = () => {
        navigate("/file-upload")
    }

	const messageUploadpage = () =>{
		navigate("/message-upload");

	}

	

	return (
		<div>
			<Header email={localStorage.getItem('user_email')}></Header>
			<center><h1>Manager page</h1></center>
			<center><img src="https://cdn-icons-png.flaticon.com/512/1106/1106631.png"></img></center><br/>
			{/* <h3>Welocme {localStorage.getItem('user_email')} </h3> */}
			<center><button className="btn btn-success btn-lg" onClick={managerUploadPage}>Upload a file</button>
			<br/><br/>
			<center></center><button className="btn btn-primary btn-lg" onClick={messageUploadpage}>Upload a message</button></center><br/>
			{/* <button onClick={logout}>Log out</button> */}
		</div>
	);

};


export default Manager;

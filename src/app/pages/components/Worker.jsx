import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Header from './Header';


const Worker = () => {

	const { logout } = useAuth0();
	const navigate = useNavigate();
  
    const workerUploadPage = () => {
        navigate("/message-upload")
    }

	const styles = {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	};

	return (
		<div>
			<Header email={localStorage.getItem('user_email')}></Header>
			<center><h1 style={styles}>Worker</h1><br/></center>
			<center><img src="https://cdn-icons-png.flaticon.com/512/1106/1106631.png"></img></center><br/>
			<center><button type="button"  className="btn btn-primary btn-lg" onClick={workerUploadPage}>Upload a message</button></center><br/>
			{/* <button onClick={logout}>Log out</button> */}
		</div>
	);

};


export default Worker;

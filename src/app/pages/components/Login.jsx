import React, { useEffect, useState } from "react";
import { json, useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import axios from "axios";
import jwt_decode from "jwt-decode";
import Header from './Header';


const Login = (props) => {

	const navigate = useNavigate();
	const auth = useAuth0();
  

	const getRole = async()=>{
		const  token = await auth.getAccessTokenSilently();
	    const decoded = jwt_decode(token);
		const role = decoded.myroles[0];
		localStorage.setItem("user_role",role);
		return role;
	}

	const setSessions = () =>{
		auth.getAccessTokenSilently().then(res=>{
			localStorage.setItem('token',res);
		});
        localStorage.setItem('user_email',auth.user.email);
		localStorage.setItem('status',auth.isAuthenticated);

	}

	const styles = {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	};

	if(auth.isAuthenticated){
	 setSessions();
     getRole().then(res=>{
		if(res == 'manager'){
        	navigate("/manager");
		}else if(res == 'worker'){
			navigate("/worker");
		}
		else{
			navigate("/access-denied");
		}
	 });
	   

	}else{
		return(
			<>
			<Header></Header>
			{/* <h1 style={styles}>Hackme</h1><br/> */}
			<center><img src="https://cdn-icons-png.flaticon.com/512/1106/1106631.png"></img></center><br/>
			<center><button type="button" class="btn btn-primary" onClick={auth.loginWithRedirect}>Login</button></center>
			</>
		);
	}

};


export default Login;

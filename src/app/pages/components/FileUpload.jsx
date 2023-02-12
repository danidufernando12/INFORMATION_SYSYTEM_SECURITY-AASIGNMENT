import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from './Header';


const FileUpload = () => {

	const [subject, setSubject] = useState();
	const [uploadFile, setUploadFile] = useState();


	const changeSubject = (event) =>{
      setSubject(event.target.value);
	}

	const changeFile = (event) =>{
		setUploadFile(event.target.files[0]);
	}

	const submitFile = (event) => {
		event.preventDefault();
		const formData = new FormData();
		formData.append("file", uploadFile);
		formData.append("subject",subject);
		formData.append("user_email",localStorage.getItem("user_email"));
		formData.append("user_role",localStorage.getItem("user_role"));
		axios.post('https://localhost:8070/files', formData, {
			headers: {
			  'Content-Type': 'multipart/form-data',
			  authorization: `Bearer ${localStorage.getItem("token")}`,
			}
		}).then(res=>{
			alert("File upload Success!!");
			console.log(res);
		}).catch(err=>{
			alert(err);
		}
			);
	}

	return (
		<div>
			<Header email={localStorage.getItem('user_email')}></Header>
			<center><h1>Manager Upload</h1></center>
			<br/>
			<center><form onSubmit={submitFile}>
			<div className="form-group">
			<div className="form-group col-md-6">
				<input placeholder="Subject" className="form-control" type={"text"} name="subject" onChange={changeSubject}></input><br/>
				</div>
				</div>
				<div className="form-group">
				<div className="form-group col-md-6">
				<div className="float-lg-left"><label >Upload File :</label></div><br/>
				<input placeholder="Upload File" className="form-control" type={"file"} name="file" onChange={changeFile}></input>
				</div>
				</div>
				<br/>
				{/* <input type={"submit"}  class="btn btn-primary" value="Submit"/> */}
				<button className="btn btn-primary">Submit</button>
			</form></center>
		</div>
	);

};

export default FileUpload;
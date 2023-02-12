import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const UnauthorizedAccess = () => {
  const { logout } = useAuth0();
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/");
    logout();
    localStorage.clear();
  };

  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        height: "100%",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <div style={{ justifyContent: "center", paddingTop: "300px" }}>
        <h1>401 Error</h1>
        <h1>Access Denied</h1>
        <button className="btn btn-primary" onClick={goBack}>
          Go Back To Login page
        </button>
      </div>
    </div>
  );
};

export default UnauthorizedAccess;

import React from "react";
import "../App.css";
import Loginform from "../components/Login-Form";
import {
  // PassageAuth,
  PassageUnAuthGuard,
} from "@passageidentity/passage-react";
import { Navigate } from "react-router-dom";

const Login = () => {
  return (
    <div className='App-header'>
      <PassageUnAuthGuard authComp={<Navigate to='/dashboard' />}>
        <Loginform />
      </PassageUnAuthGuard>
    </div>
  );
};

export default Login;

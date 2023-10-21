import logo from "../logo.png";
import "../App.css";
import { PassageProfile } from "@passageidentity/passage-react";

import React from "react";

const UserProfile = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} alt='logo' />
        <h1 className='text-6xl text-emo-black'>ecomoda</h1>
        <div className='m-10'>
          <h2>Hello User, you're logged in</h2>
          <PassageProfile />
        </div>
      </header>
    </div>
  );
};

export default UserProfile;

import logo from "../logo.png";
import "../App.css";

import React from "react";

const UserProfile = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} alt='logo' />
        <h1 className='text-6xl text-emo-black'>ecomoda</h1>
        <div>
          <a className='text-xl m-5 text-emo-black hover:text-emo-tan' href='/'>
            Home
          </a>
          <a
            className='text-xl text-emo-black hover:text-emo-tan'
            href='/login'
          >
            Profile
          </a>
        </div>
        <div className='m-10'>
          <h2>Hello User, you're logged in</h2>
        </div>
      </header>
    </div>
  );
};

export default UserProfile;

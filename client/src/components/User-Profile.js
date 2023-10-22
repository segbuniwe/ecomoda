import "../App.css";
import { PassageProfile } from "@passageidentity/passage-react";

import React from "react";

const UserProfile = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <div className='m-10'>
          <h2>Hello User, you're logged in</h2>
          <PassageProfile />
        </div>
      </header>
    </div>
  );
};

export default UserProfile;

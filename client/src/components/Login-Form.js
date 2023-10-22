import React from "react";
import { PassageAuth } from "@passageidentity/passage-react";

const LoginForm = () => {
  return (
    <header className='App-header'>
      <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm'></div>
        <PassageAuth />
      </div>
    </header>
  );
};

export default LoginForm;

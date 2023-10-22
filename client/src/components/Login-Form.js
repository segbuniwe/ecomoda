import React from "react";
import { PassageAuth } from "@passageidentity/passage-react";

const LoginForm = () => {
  return (
    <div className='mx-auto max-w-3xl bg-gray-50 py-6 my-12 rounded-xl h-[60vh]'>
      <PassageAuth />
      <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm'></div>
      </div>
    </div>
  );
};

export default LoginForm;

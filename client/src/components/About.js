import logo from "../logo.png";
import "../App.css";

import React from "react";

const About = () => {
  return (
    <div className='relative bg-gray-100 my-12 rounded-2xl max-w-7xl mx-auto'>
      <div className='mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8 '>
        <div className='px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6'>
          <div className='mx-auto max-w-2xl lg:mx-0'>
            <h1 className='mt-12 tracking-tight sm:mt-10 text-emo-black text-4xl '>
              Style with purpose: Dress the planet
            </h1>
            <p className='mt-6 text-xl leading-8'>
              "Our mission is to revolutionize fashion consumption by creating a
              sustainable and accessible clothing-swap app. We aim to reduce
              clothing waste, promote a circular fashion economy, and empower
              people to refresh their style responsibly, all while fostering a
              more eco-conscious and inclusive world."
            </p>
            <div className='mt-10 flex items-center gap-x-6'>
              <a
                href='/login'
                className='rounded-md bg-emo-teal px-3.5 py-2.5 text-md font-semibold text-white shadow-sm hover:bg-emo-tan focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emo-teal'
              >
                Login
              </a>
              <a
                href='/educate'
                className='text-md font-semibold leading-6 text-gray-900'
              >
                Learn more <span aria-hidden='true'>→</span>
              </a>
            </div>
          </div>
        </div>
        <div className='relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0 '>
          <img
            className='aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full rounded-r-2xl'
            src='https://images.unsplash.com/photo-1545291730-faff8ca1d4b0?auto=format&fit=crop&q=80&w=3087&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt=''
          />
        </div>
      </div>
    </div>
  );
};

export default About;

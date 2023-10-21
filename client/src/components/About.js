import logo from "../logo.png";
import "../App.css";

import React from "react";

import { PassageAuth } from "@passageidentity/passage-react";

const About = () => {
    return (
        <div className='App'>
            <header className='App-header'>
                <img src={logo} alt='logo' />
                <h1 className='text-6xl text-emo-black'>EcoModa</h1>
                <div className='m-12'>
                    <PassageAuth />
                </div>
            </header>
        </div>
    );
};

export default About;

import React from "react";
import "../App.css";
import About from "../components/About";
import {
  // PassageAuth,
  PassageUnAuthGuard,
} from "@passageidentity/passage-react";
import { Navigate } from "react-router-dom";

const Index = () => {
  return (
    <PassageUnAuthGuard authComp={<Navigate to='/dashboard' />}>
      <About />
    </PassageUnAuthGuard>
  );
};

export default Index;

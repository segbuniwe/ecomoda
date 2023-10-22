import React from "react";
import "../App.css";
import About from "../components/About";
import {
  // PassageAuth,
  PassageUnAuthGuard,
} from "@passageidentity/passage-react";
import { Navigate } from "react-router-dom";
import Layout from "../components/Layout";

const Index = () => {
  return (
    <PassageUnAuthGuard authComp={<Navigate to='/dashboard' />}>
      <Layout>
        <About />
      </Layout>
    </PassageUnAuthGuard>
  );
};

export default Index;

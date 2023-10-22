import React from "react";
import "../App.css";
import UserProfile from "../components/User-Profile";
import { PassageAuthGuard } from "@passageidentity/passage-react";
import { usePassageUserInfo } from "../hooks/";
import LogoutButton from "../components/LogoutButton";
import Layout from "../components/Layout";

const Dashboard = () => {
  const { userInfo, loading } = usePassageUserInfo();

  if (loading) {
    return (
      <div>
        <div>Loading</div>
      </div>
    );
  }
  return (
    <PassageAuthGuard
      unAuthComp={
        <div>
          <div>you must be logged in</div>
          <div>
            <a href='/'>Login</a>
          </div>
        </div>
      }
    >
      <Layout>
      <div>
        <div>Welcome</div>
        <div>
          You successfully signed in with Passage. This is your homepage. <br />
          <br />
          Your username is: {userInfo?.email}
        </div>
        <LogoutButton />
      </div>
      <UserProfile />
      </Layout>
    </PassageAuthGuard>
  );
};

export default Dashboard;

import React from "react";
import "../App.css";

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
    <Layout>
      <div className='bg-gray-100 my-12 rounded-2xl max-w-5xl mx-auto'>
        <div>
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
            <div className='mx-auto max-w-4xl py-6'>
              <div>Welcome</div>
              <div>
                You successfully signed in with Passage. This is your homepage.{" "}
                <br />
                <br />
                Your username is: {userInfo?.email}
              </div>
              <LogoutButton />
            </div>
          </PassageAuthGuard>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;

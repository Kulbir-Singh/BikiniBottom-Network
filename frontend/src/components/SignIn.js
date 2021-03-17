import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "./UserContext";

const SignIn = () => {
  const {
    allUsers,
    userName,
    setUserName,
    setFoundName,
    setCurrentUser,
  } = useContext(UserContext);

  let user =
    allUsers &&
    allUsers.find((user) => {
      return user.name === userName;
    });

  let setuser = useEffect(() => {
    if (user) {
      setFoundName(user.name);
      setCurrentUser(user);
    }
  }, [user]);

  //console.log(user._id);

  if (allUsers) {
    return (
      <>
        <Div>
          {/* <img src="/images/facespace_bg.jpg" /> */}
          <LoginBox>
            <form onSubmit={setuser}>
              <FirstName
                placeholder="Type First Name"
                onChange={(ev) => setUserName(ev.target.value)}
              ></FirstName>
              <Link to={`/homepage`}>
                <Submit>Submit</Submit>{" "}
              </Link>

              {/* //user = "Kulbir" persist
            <Link to="/">Sign in as guest</Link>
      // user="" (loses state)
            <a href="/">Sign in as guest</a> */}
            </form>
          </LoginBox>
        </Div>
      </>
    );
  } else {
    return <p>loading</p>;
  }
};

const Div = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 200px;
  background-color: grey;
`;

const FirstName = styled.input`
  width: 300px;
  height: 50px;
  margin: 5px;
`;

const Submit = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  height: 50px;
  width: 300px;
  color: white;
  background-color: #3d9feb;
`;

export default SignIn;

import React, { useState, useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
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
  const history = useHistory();
  let setuser = (e) => {
    e.preventDefault();

    let user =
      allUsers &&
      allUsers.find((user) => {
        return user.name === userName;
      });

    if (user) {
      setFoundName(user.name);
      setCurrentUser(user);
      history.push("/homepage");
    }
  };

  //console.log(user._id);

  if (allUsers) {
    return (
      <Background>
        <Div>
          <Imgdiv>
            <Img src="../sign.png" />
          </Imgdiv>
          <LoginBox>
            <Form onSubmit={(e) => setuser(e)}>
              <Login>
                <Logintext>Welcome</Logintext>
              </Login>
              <UserInput>
                <FirstName
                  placeholder="Type First Name"
                  onChange={(ev) => setUserName(ev.target.value)}
                ></FirstName>
                <Submit>Submit</Submit>
              </UserInput>
            </Form>
          </LoginBox>
        </Div>
      </Background>
    );
  } else {
    return <p>loading</p>;
  }
};

const Background = styled.div`
  background: url("../singupobackground.jpg");
  background-position: center;
  background-size: cover;
  position: absolute;
  width: 100%;
  height: 94.7%;
`;
const Div = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const H1 = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 30px;
  width: 300px;
  color: white;
  margin-top: 20px;
  background-color: rgba(0, 43, 77, 0.9);
  margin-bottom: 70px;
`;

const Form = styled.form`
  /* background-image: -webkit-linear-gradient(bottom, #ffffff 70%, #002b4d 40%); */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const Login = styled.div`
  width: 100%;
  background-color: #002b4d;
  margin-top: -50px;
  margin-bottom: 0;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  padding-top: 50px;
  padding-left: 45px;
`;

const UserInput = styled.div``;
const Logintext = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 40px;
  width: 300px;
  color: white;
  margin-top: 40px;
  background-color: rgba(0, 43, 77, 0.9);
  margin-bottom: 50px;
`;
const Imgdiv = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 100px;
  top: 50px;
  position: relative;
  background-color: #edc526;
  opacity: 0.99;
`;

const Img = styled.img`
  height: 200px;
  position: relative;
  left: -65px;
  top: -10px;
  -webkit-filter: drop-shadow(5px 5px 5px #222);
  filter: drop-shadow(5px 5px 5px #000);
  transform: rotate(10deg);
`;

const LoginBox = styled.div`
  background-color: rgba(148, 219, 255, 0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 400px;
  border-radius: 5px;
`;

const FirstName = styled.input`
  background-color: rgba(148, 219, 255, 0.3);
  width: 300px;
  height: 50px;
  margin: 25px 0;
  color: black;
  border: none;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom: 3px solid #002b4d;
  outline: none;
  ::placeholder {
    color: white;
    font-size: 15px;
  }
`;

const Submit = styled.button`
  display: flex;
  justify-content: center;
  border-radius: 10px;
  border: none;
  outline: none;
  align-items: center;
  margin: 15px 0;
  height: 50px;
  width: 300px;
  background: linear-gradient(90deg, #3d9fef, #55e7fc);
`;

export default SignIn;

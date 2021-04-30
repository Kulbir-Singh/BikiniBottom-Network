import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { UserContext } from "./UserContext";

const Users = () => {
  const { allUsers, currentUser } = useContext(UserContext);

  if (allUsers && currentUser) {
    let newAllUsers = allUsers.filter((user) => {
      return user.name !== currentUser.name;
    });
    return (
      <>
        <Div>
          <AllUsers>
            <H1>All Bikini Bottom residents</H1>
            {newAllUsers.map((user) => (
              <UserInfo>
                <Link
                  to={`/users/${user._id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Img src={user.avatarUrl} />
                  <UserName>{user.name}</UserName>
                  {currentUser.friends.includes(user._id) && (
                    <YourFriend>friend</YourFriend>
                  )}
                </Link>
              </UserInfo>
            ))}
          </AllUsers>
        </Div>
      </>
    );
  } else if (allUsers) {
    return (
      <Div>
        <AllUsers>
          <H1>All Bikini Bottom residents</H1>
          {allUsers.map((user) => (
            <UserInfo>
              <Link
                to={`/users/${user._id}`}
                style={{ textDecoration: "none" }}
              >
                <Img src={user.avatarUrl} />
                <UserName>{user.name}</UserName>
              </Link>
            </UserInfo>
          ))}
        </AllUsers>
      </Div>
    );
  } else {
    return <p>laoding</p>;
  }
};

const YourFriend = styled.p`
  color: Yellow;
  text-align: center;
  position: relative;
  top: -200px;
  font-size: 30px;
  -webkit-filter: drop-shadow(5px 5px 5px #222);
  filter: drop-shadow(5px 5px 5px #000);
`;

const Div = styled.div`
  background-image: url("../gradient.jpg");
  background-size: cover;
  max-width: 100vw;
  background-position: center;
  height: 94.7vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AllUsers = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 100vw;
`;

const UserInfo = styled.div`
  margin: 40px;
  box-shadow: 0px -1px 40px -2px rgba(0, 0, 0, 0.67);
  -webkit-box-shadow: 0px -1px 40px -2px rgba(0, 0, 0, 0.67);
  -moz-box-shadow: 0px -1px 40px -2px rgba(0, 0, 0, 0.67);
  height: 150px;
  width: 150px;
  border-radius: 100px;
  background: #0e86d4;
  text-decoration: none;
  :hover {
    background: linear-gradient(90deg, #55e7fc, #002b4d);
  }
`;

const Img = styled.img`
  width: 150px;
  height: 150px;
  position: relative;
  -webkit-filter: drop-shadow(5px 5px 5px #222);
  filter: drop-shadow(5px 5px 5px #000);
  transition: 1000ms;
  :hover {
    height: 200px;
    width: 200px;
  }
`;

const UserName = styled.p`
  -webkit-filter: drop-shadow(5px 5px 5px #222);
  filter: drop-shadow(5px 5px 5px #000);
  text-decoration: none;
  color: white;
  width: 100px;
  font-size: 25px;
  text-align: center;
  position: relative;
  top: -50px;
`;

const H1 = styled.h1`
  text-align: center;
  color: linear-gradient(90deg, #002b4d, #55e7fc);
  height: 50px;
  font-size: 40px;
  color: #002b4d;
  width: 100%;
  margin-top: 0px;
`;

export default Users;

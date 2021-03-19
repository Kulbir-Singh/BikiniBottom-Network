import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { UserContext } from "./UserContext";

const Users = () => {
  const { allUsers, currentUser } = useContext(UserContext);

  if (allUsers && currentUser) {
    return (
      <>
        <AllUsers>
          <H1>All Facespace members</H1>
          {allUsers.map((user) => (
            <UserInfo>
              <Link to={`/users/${user._id}`}>
                <Img src={user.avatarUrl} />
                <UserName>{user.name}</UserName>
                {currentUser.friends.includes(user._id) && <span>friend</span>}
              </Link>
            </UserInfo>
          ))}
        </AllUsers>
      </>
    );
  } else if (allUsers) {
    return (
      <Div>
        <AllUsers>
          <H1>All Facespace members</H1>
          {allUsers.map((user) => (
            <UserInfo>
              <Link to={`/users/${user._id}`}>
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
const Div = styled.div`
  background-image: url("../water.jpg");
  background-size: cover;
  background-position: center;
  height: 94.7vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AllUsers = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const UserInfo = styled.div`
  margin: 40px;
`;

const Img = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 10px;
  background-color: #3d9feb;
  border: 2px solid #3d9feb;
  -webkit-box-shadow: 1px 2px 3px rgba(0, 0, 0, 1.5);
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 1.5);
`;

const UserName = styled.p`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: #3d9feb;
  text-align: center;
`;

const H1 = styled.h1`
  color: #3d9feb;
  width: 100%;
  margin-top: 0px;
  font-size: 25px;
`;

export default Users;

import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { UserContext } from "./UserContext";

const Users = () => {
  const { allUsers, user, userName, currentUser } = useContext(UserContext);
  console.log(currentUser);
  // let friends =
  //   //if currentUser exists, if so, then filter
  //   //currentUser === {id: '...', name:'Lis', friends:['123', '111']}
  //   currentUser &&
  //   allUsers.filter((user) => {
  //     //each user in allUsers (russel, maisy, ...)
  //     currentUser.friends.includes(user._id)
  //     //we want to check if their id is included in Lis's friends array
  //     return;
  //   });
  // return user.friends.includes());

  //  if (allUsers && currentUser) {
  //  console.log(user);
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
                {/* if the first part is true then the second part is true (its justs a span...so it's always true)
                  if first part is false then it 
              */}
                {currentUser.friends.includes(user._id) && <span>friend</span>}
              </Link>
            </UserInfo>
          ))}
        </AllUsers>
      </>
    );
  } else if (allUsers) {
    return (
      <>
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
      </>
    );
  } else {
    return <p>laoding</p>;
  }
};

const AllUsers = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-left: 10%;
  margin-top: 50px;
  width: 80%;
  height: 100%;
`;

const UserInfo = styled.div`
  width: 100px;
  height: 100px;
  margin: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Img = styled.img`
  width: 100px;
  border-radius: 100px;
  height: 100px;
  border: 2px solid #3d9feb;
`;

const UserName = styled.div`
  width: 100px;
  background-color: #3d9feb;
  display: flex;
  justify-content: center;
`;

const H1 = styled.h1`
  color: #3d9feb;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 10px;
  font-size: 25px;
`;

export default Users;

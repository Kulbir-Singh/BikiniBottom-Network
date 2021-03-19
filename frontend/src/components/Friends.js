import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";

const Friends = () => {
  const { user, allUsers, currentUser } = useContext(UserContext);

  const friendList =
    allUsers &&
    allUsers.filter((friend) => {
      return user.friends.includes(friend._id);
    });

  if (currentUser && friendList && user) {
    return (
      <>
        <Div>
          {friendList.map((friend) => {
            if (friend.name === currentUser.name) {
              return (
                <Link
                  to={`/users/${friend._id}`}
                  style={{ textDecoration: "none" }}
                >
                  <FriendsList>
                    <Img src={friend.avatarUrl} />
                    <Name>YOU</Name>
                  </FriendsList>
                </Link>
              );
            } else {
              return (
                <Link
                  to={`/users/${friend._id}`}
                  style={{ textDecoration: "none" }}
                >
                  <FriendsList>
                    <Img src={friend.avatarUrl} />
                    <Name>{friend.name}</Name>
                  </FriendsList>
                </Link>
              );
            }
          })}
        </Div>
      </>
    );
  } else if (friendList && user) {
    return (
      <>
        <Div>
          {friendList.map((friend) => {
            return (
              <Link
                to={`/users/${friend._id}`}
                style={{ textDecoration: "none" }}
              >
                <FriendsList>
                  <Img src={friend.avatarUrl} />
                  <Name>{friend.name}</Name>
                </FriendsList>
              </Link>
            );
          })}
        </Div>
      </>
    );
  } else {
    return <div>loading</div>;
  }
};
const Name = styled.p`
  -webkit-filter: drop-shadow(5px 5px 5px #222);
  filter: drop-shadow(5px 5px 5px #000);
  text-decoration: none;
  color: white;
  font-size: 20px;
  text-align: center;
`;
const Div = styled.div`
  width: 100%;
  display: flex;
  margin-top: 150px;
  height: 400px;
  overflow: hidden;
`;

const Img = styled.img`
  width: 100px;
  height: 100px;
  -webkit-filter: drop-shadow(5px 5px 5px #222);
  filter: drop-shadow(5px 5px 5px #000);
  transition: 1000ms;
  :hover {
    height: 150px;
    width: 150px;
  }
`;

const FriendsList = styled.div`
  width: 100px;
  height: 100px;
  margin: 0px 50px;
  border-radius: 100px;
  background: linear-gradient(90deg, #002b4d, #55e7fc);
  :hover {
    background: linear-gradient(90deg, #55e7fc, #002b4d);
  }
`;

export default Friends;

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
                <Link to={`/users/${friend._id}`}>
                  <FriendsList>
                    <Img src={friend.avatarUrl} />
                    <p>YOU</p>
                  </FriendsList>
                </Link>
              );
            } else {
              return (
                <Link to={`/users/${friend._id}`}>
                  <FriendsList>
                    <Img src={friend.avatarUrl} />
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
              <Link to={`/users/${friend._id}`}>
                <FriendsList>
                  <Img src={friend.avatarUrl} />
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

const Div = styled.div`
  width: 100%;
  display: flex;
  height: 400px;
  overflow: hidden;
`;

const Img = styled.img`
  width: 100px;
`;

const FriendsList = styled.div`
  width: 200px;
`;

export default Friends;

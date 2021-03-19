import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Friends from "./Friends";
import { UserContext } from "./UserContext";

const User = () => {
  //fetch().then().then();
  const { user, setUser } = useContext(UserContext);
  const { id } = useParams();
  useEffect(() => {
    fetch(`/api/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data.data));
  }, [id]);

  return user && user.friends ? (
    <>
      <Div>
        <UserFocus>
          <Img src={user.avatarUrl} />
          <H1>{user.name}'s friends</H1>
        </UserFocus>
        <Friends />
      </Div>
    </>
  ) : (
    <div>loading</div>
  );
};

const UserFocus = styled.div`
  margin-bottom: 200px;
  height: 300px;
  width: 300px;
  border-radius: 300px;
  /* background-color: #002b4d; */
  background: linear-gradient(90deg, #002b4d, #55e7fc);
  text-decoration: none;
  :hover {
    background: linear-gradient(90deg, #55e7fc, #002b4d);
  }
`;

const Div = styled.div`
  display: flex;
  background: url("../spongebobwall.jpg");
  width: 100%;
  height: 94.7vh;
  padding-left: 10%;
  padding-top: 10%;
`;

const H1 = styled.h1`
  position: relative;
  width: 500px;
  border-bottom: 2px solid #002b4d;
  -webkit-filter: drop-shadow(5px 5px 5px #222);
  filter: drop-shadow(5px 5px 5px #000);
  text-decoration: none;
  color: white;
  font-size: 20px;
  top: -200px;
  right: -350px;
`;

const Img = styled.img`
  width: 300px;
  height: 300px;
`;

export default User;

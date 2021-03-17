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
        <div>
          <Img src={user.avatarUrl} />
          <H1>{user.name}</H1>
        </div>
        <Friends />
      </Div>
    </>
  ) : (
    <div>loading</div>
  );
};

const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 1000px;
  padding-left: 10%;
  padding-top: 10%;
`;

const H1 = styled.h1`
  display: flex;
  align-items: center;
  height: 300px;
`;

const Img = styled.img`
  width: 300px;
  height: 300px;
`;

export default User;

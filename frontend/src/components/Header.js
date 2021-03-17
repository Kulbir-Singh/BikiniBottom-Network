import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import styled from "styled-components";
import createGlobalStyle from "./GlobalStyles";
import { UserContext } from "./UserContext";

const Header = () => {
  const { allUsers, userName, currentUser, setCurrentUser } = useContext(
    UserContext
  );

  let name;
  let user =
    allUsers &&
    allUsers.find((user) => {
      return user.name === userName;
    });

  if (user) {
    name = user.name;
  }

  return (
    <>
      <Div>
        <H1>
          <Link to="/homepage">
            <H1>Facespace</H1>
          </Link>
        </H1>
        <H1>{name}</H1>
        <H1>
          <Link to="/signin">
            {currentUser ? (
              <H1>Sign Out</H1>
            ) : (
              <>
                <H1>Sign in</H1>
              </>
            )}
          </Link>
        </H1>
      </Div>
    </>
  );
};

const Div = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  background-color: #3d9feb;
`;

// const Links = styled.Link`
//   text-decoration: none;
//   :visited {
//     color: white;
//   }
// `;

const H1 = styled.h1`
  color: white;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 10px;
  font-size: 25px;
`;

export default Header;

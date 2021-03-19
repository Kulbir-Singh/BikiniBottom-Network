import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import Header from "./Header";
import Users from "./Users";
import User from "./User";
import SignIn from "./SignIn";
import SignUp from "./Signup";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <div>
        <Header />
        <Switch>
          <Route exact path="/homepage">
            <Users />
          </Route>
          <Route exact path="/">
            <Users />
          </Route>
          <Route path="/users/:id">
            <User />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;

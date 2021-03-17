import React, { createContext, useEffect, useState } from "react";
export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [allUsers, setAllUsers] = useState();
  const [user, setUser] = useState();
  const [currentUser, setCurrentUser] = useState(undefined);
  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => setAllUsers(data.data));
  }, []);

  const [userName, setUserName] = useState("");
  const [foundName, setFoundName] = useState("");

  return (
    <UserContext.Provider
      value={{
        allUsers,
        setAllUsers,
        user,
        setUser,
        setUserName,
        userName,
        foundName,
        currentUser,
        setCurrentUser,
        setFoundName,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

import React, { useState } from "react";

const SignUp = () => {
  //const [newUser, setNewUser] = useState({});
  const [username, setUsername] = useState();

  fetch("/api/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      /*name: username*/
    }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data)); //setNewUser.name()
  return (
    <div></div>
    // <div>//input that has onChange=((ev)=>setUsername(ev.target.value))</div>
  );
};

export default SignUp;

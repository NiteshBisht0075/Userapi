import React, { useState } from "react";
import axios from "axios";
function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const nameEvent = (event) => {
    setName(event.target.value);
  };

  const emailEvent = (event) => {
    setEmail(event.target.value);
  };

  const passwordEvent = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const postData = {
      name,
      email,
      password
    };

    // console.log(postData);

    axios.post("https://jsonplaceholder.typicode.com/users", { postData }).then(
      (response) => {
        console.log(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <React.Fragment>
      <form method="POST" onSubmit={handleSubmit}>
        <div>Name</div>
        <input type="String" placeholder="Enter Name" onChange={nameEvent} />
        <br></br>
        <div>Email</div>
        <input type="Email" placeholder="Enter Email" onChange={emailEvent} />
        <br></br>
        <div>Password</div>
        <input
          type="Password"
          placeholder="Enter Password"
          onChange={passwordEvent}
        />
        <br></br>
        <button> Submit</button>
      </form>
    </React.Fragment>
  );
}
export default Login;

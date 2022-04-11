import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import classes from "../component/Login.module.css";
const Login = ({ data }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const emailIsValid = email.trim() !==""&& email.includes("@");
  const emailIsValid = email.trim() !== "" && email.includes("@");

  const passwordIsValid = password.trim() !== "" && password.trim().length > 6;

  const EmailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  const history = useNavigate()
  const handleSubmit = (e) => {
      history("/meals")
    e.preventDefault();
    {
      emailIsValid && passwordIsValid && alert("succesfully login");
      data();
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          onChange={EmailHandler}
        ></input>
        <small id="emailHelp" class="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
          onChange={passwordHandler}
        />
        {!passwordIsValid && <p class="form-text text-muted">please enter the password </p>}
      </div>
      
      <button
        type="submit"
        class="btn btn-primary"
        disabled={!emailIsValid || !passwordIsValid}
      >
        
        Login
      </button>
    </form>
  );
};

export default Login;
"use client"
import swal from "sweetalert";

const SignUp = () => {
  return (
    <div className="container">
    <form action="" id="form">
      <div className="box">
        <h1>Login</h1>
        <label htmlFor="username">Username:</label>
        <input id="username" name="username" type="text"/>
      </div>
      <div className="box">
        <label htmlFor="password">Password:</label>
        <input id="password" name="password" type="password"/>
      </div>
      <button type="submit" id="login" onClick = {(e) => {
          e.preventDefault();

          const usernameAddress = document.getElementById("username").value;
          const passwordAddress = document.getElementById("password").value;

          const getUser = localStorage.getItem("Username");
          const getPass = localStorage.getItem("Password");

        if (usernameAddress == "" && passwordAddress == "") {
          swal("Input field has no value");
        } else {
          if (usernameAddress == getUser && passwordAddress == getPass) {
            swal(`Login successfull, hi ${usernameAddress}`);
          } else {
            swal("Something is wrong");
          }
        }
    }}>Login</button>
    </form>
  </div>
  )
}

export default SignUp

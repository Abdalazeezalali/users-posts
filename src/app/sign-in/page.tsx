"use client"

import Link from "next/link";
import { useEffect } from "react";

// useEffect(() => {
//   let form = document.getElementById("form");
//   let username = document.getElementById("username");
//   let email = document.getElementById("email");
//   let password = document.getElementById("password");
//   let psw = document.getElementById("psw");
//   let btn = document.getElementById("btn");
// }, [])

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   validation();
// });
const setError = (ele, msg) => {
  let box = ele.parentElement;
  let error = box.querySelector(".error");

  error.innerText = msg;
  box.classList.add("error");
  box.classList.remove("success");
};
const setSuccess = (ele) => {
  let box = ele.parentElement;
  let error = box.querySelector(".error");

  error.innerText = "";
  box.classList.add("success");
  box.classList.remove("error");
};
const mailFormat = (e) => {
  const re = /\w+@\w+.\w+/;
  return re.test(String(e).toLowerCase());
};
const passFormat = (p) => {
    const re = /^(?=.*\p{Ll})(?=.*\p{Lu})(?=.*[\d|@#$!%*?&])[\p{L}\d@#$!%*?&]{8,96}$/gmu;
    return re.test(p);
}
const userFormat = (u) => {
    const re = /[^0-9]/;
    return re.test(u);
}
// btn.addEventListener("click", () => {
//   let localItems = JSON.parse(localStorage.getItem("localItem"));
//   if (localItems === null) {
//     itemsList = [];
//   } else {
//     itemsList = localItems;
//   }
//   itemsList.push(username.value);
//   itemsList.push(email.value);
//   itemsList.push(password.value);
//   itemsList.push(psw.value);
//   localStorage.setItem("localItem", JSON.stringify(itemsList));
// });
function validation() {
    let form = document.getElementById("form");
  let username = document.getElementById("username");
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let psw = document.getElementById("psw");
  let btn = document.getElementById("btn");
  let user = username.value.trim();
  let mail = email.value.trim();
  let pass1 = password.value.trim();
  let pass2 = psw.value.trim();

  localStorage.setItem("Username", user);
  localStorage.setItem("Email", mail);
  localStorage.setItem("Password", pass1);
  localStorage.setItem("Cpassword", pass2);

  if (user === "") {
    setError(username, "Username is required");
  } else if (!userFormat(user)) {
    setError(username, "Digital are not allowed");
  } else {
    setSuccess(username);
  }
  if (mail === "") {
    setError(email, "Email is required");
  } else if (!mailFormat(mail)) {
    setError(email, "Please enter a valid email");
  } else {
    setSuccess(email);
  }
  if (pass1 === "") {
    setError(password, "Password is required");
  } else if (!passFormat(pass1)) {
    setError(password, "Password must be a minimum of 8 characters including number, Upper, Lower And one special character");
  } else {
    setSuccess(password);
  }
  if (pass2 === "") {
    setError(psw, "Please confirm your password");
  } else if (pass2 != pass1) {
    setError(psw, "Passwords does't match");
  } else {
    setSuccess(psw);
  }
}
const SignIn = () => {
  
// useEffect(() => {
//   let form = document.getElementById("form");
//   let username = document.getElementById("username");
//   let email = document.getElementById("email");
//   let password = document.getElementById("password");
//   let psw = document.getElementById("psw");
//   let btn = document.getElementById("btn");
// }, [])
  return (
    <div className="container">
    <form action="" id="form" onSubmit={ (e) => {
  e.preventDefault();
  validation();
}}>
      <div className="box">
        <h1>Registration Form</h1>
        <label htmlFor="username">Username:</label>
        <input id="username" name="username" type="text"/>
        <div className="error"></div>
      </div>
      <div className="box">
        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type="text"/>
        <div className="error"></div>
      </div>
      <div className="box">
        <label htmlFor="password">Password:</label>
        <input id="password" name="password" type="password"/>
        <div className="error"></div>
      </div>
      <div className="box">
        <label htmlFor="password">Confirm Password:</label>
        <input id="psw" name="psw" type="password"/>
        <div className="error"></div>
      </div>
      <button type="submit" id="btn">Register Now</button>
      <div className="link">
        <Link href="/sign-up">Already have an account</Link>
      </div>
    </form>
  </div>
  )
}

export default SignIn

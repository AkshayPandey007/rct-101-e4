import React from "react";
import { useState } from "react";

const Login = () => {
  const [loginCreds,setLoginCreds]=useState({})

  const handlechange=(e)=>{
    const{name,value}=e.target
    setLoginCreds({...loginCreds,[name]:value})
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input data-cy="login-email" type="email" placeholder="Enter Email..." onchange={handlechange}/>
        <input data-cy="login-password" type="password" placeholder="Enter Password..." onchange={handlechange}/>
        <button data-cy="login-submit" type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

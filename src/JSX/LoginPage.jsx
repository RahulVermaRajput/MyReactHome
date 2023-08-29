import React, { useState } from 'react';
import "../CSS/common.css";
import { Button } from "@mui/material";
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    console.log(username);
    console.log(password);
    axios.get('https://6432926ed0127730d2d51abb.mockapi.io/rvapi/loginusers').then((response)=>{

      console.log(response.data);
  
      // eslint-disable-next-line
      const isSuccess = response.data.find((user)=>{
         if(user.loginid === username && user.password === password)
          {
            localStorage.setItem("username",user.name);
            return true;
          } 
          else{
            return false; 
          }
      });

      if(isSuccess){
        toast("Login Success");
        navigate("/");
      }
      else{
        toast("Login Failed!!! Try Again..");
      }
    }).catch((error)=>{
        console.log(error);
    });
  };

  return (
    <>
      <div class="loginform">
        <h2>Login Here</h2>
        <br/>
        <div class="form-floating mb-3">
          <input type="email" class="form-control" onChange={ (e)=>{setUsername(e.target.value)}} id="floatingInput" placeholder="name@example.com" />
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
          <input type="password" class="form-control" onChange={(e)=>setPassword(e.target.value)} id="floatingPassword" placeholder="Password" />
          <label for="floatingPassword">Password</label>
        </div>
        <br />
        <Button variant="contained" onClick={handleLogin}> Login </Button>
      </div>
    </>

  );
};

export default LoginPage;

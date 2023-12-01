import React, { useState } from 'react';
import "../CSS/common.css";
import { Button, ButtonGroup } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



const LoginPage = (props) => {

  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {

    const url = 'https://6432926ed0127730d2d51abb.mockapi.io/rvapi/loginusers'

        axios.get(url).then((response)=>{
          console.log(username)
          console.log(password);
          console.log(response);
        const user = response.data.find(item => item.emailid === username && item.password === password);
        // const user = response.data.find((item)=>{
        //     console.log(item.emailid);
        //     console.log(item.password);
        // });
        console.log(user);
        console.log(!!user);
        if(!!user)
        {
          localStorage.setItem("isUserValid",true);
          localStorage.setItem("emailid",user.emailid);
          localStorage.setItem("username",user.username);
          props.onLogin(); 
          navigate('/valid/home');
        }
        else{
          alert("Invalid credentials");
        }

      }).catch((error)=>{
        console.error(error);
      })

  }

  return (
    <>
      <div className="loginform">
        <h2>Login Here</h2>
        <br/>
        <div className="form-floating mb-3">
          <input type="email" className="form-control" style={{minWidth:'300px'}} onChange={(event)=>{setUsername(event.target.value)}} id="floatingInput" placeholder="name@example.com" />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input type="password" className="form-control" style={{minWidth:'300px'}} onChange={(event)=>{setPassword(event.target.value)}} id="floatingPassword" placeholder="Password" />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <br />
        <Button variant="contained" onClick={handleLogin}> Login </Button>
      </div>
    </>

  );
};

export default LoginPage;

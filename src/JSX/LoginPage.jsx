import React, { useState } from 'react';
import "../CSS/common.css";
import { Button, ButtonGroup } from "@mui/material";


  const navigate = useNavigate();

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    console.log(username);
    console.log(password);
  };

  return (
    <>
      <div className="loginform">
        <h2>Login Here</h2>
        <br/>
        <div class="form-floating mb-3">
          <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
          <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
          <label for="floatingPassword">Password</label>
        </div>
        <br />
        <Button variant="contained" onClick={handleLogin}> Login </Button>
      </div>
    </>

  );
};

export default LoginPage;

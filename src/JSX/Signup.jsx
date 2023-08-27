import React, { useState } from 'react';
import axios from 'axios';
import "../CSS/common.css";
import { Button, ButtonGroup } from "@mui/material";



const SignUp = () => {
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const handleSignUp = (event) => {
    event.preventDefault();
    console.log(username);
    console.log(password);
    console.log(email);

    axios.post('https://6432926ed0127730d2d51abb.mockapi.io/rvapi/loginusers',
    {
        username:username,
        emailid:email,
        password:password,
    }
    ).then((response)=>{
        console.log(response);
       // history("/crudapp");
    }).catch((error)=>{
        console.log(error);
    });
  };

  return (
    <>
                <div className="signupform" >
                    <form>
                        <h2>Sign Up Here</h2>
                        <br/>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" autoComplete='off' onChange={(e)=>{setUsername(e.target.value)}} id="floatingInput" placeholder="name@example.com"/>
                        <label htmlFor="floatingInput">Email</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" className="form-control"  onChange={(e)=>{setPassword(e.target.value)}} id="floatingInput" placeholder="name@example.com"/>
                        <label htmlFor="floatingInput">Password</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control"  onChange={(e)=>{setEmail(e.target.value)}} id="floatingInput" placeholder="name@example.com"/>
                        <label htmlFor="floatingInput">User Name</label>
                    </div>
                    <br/>
                    <Button variant="contained"> Sign Up </Button>

                    
                    </form>
                </div>
    </>
        
  );
};

export default SignUp;

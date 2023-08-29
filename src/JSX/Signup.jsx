import React, { useState } from 'react';
import axios from 'axios';
import "../CSS/common.css";
import { Button } from "@mui/material";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';



const SignUp = () => {
    
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginid, setLoginid] = useState('');
    const handleSignUp = (event) => {
    event.preventDefault();
    console.log(username);
    console.log(password);
    console.log(loginid);

    axios.post('https://6432926ed0127730d2d51abb.mockapi.io/rvapi/loginusers',
    {
        name:username,
        loginid:loginid,
        password:password,
    }
    ).then((response)=>{
        console.log(response);
        toast('🦄 Sign Up Completed!!!');
        setUsername("");
        setPassword("");
        setLoginid("");
        navigate("/login");
    }).catch((error)=>{
        console.log(error);
        toast('🦄 '+error);
    });
  };

  return (
    <>
                <div className="signupform" >
                    <form>
                        <h2>Sign Up Here</h2>
                        <br/>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" autoComplete='off' onChange={(e)=>{setLoginid(e.target.value)}} id="floatingInputLoginid" placeholder=''/>
                        <label htmlFor="floatingInputLoginid">Login ID</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" className="form-control"  onChange={(e)=>{setPassword(e.target.value)}} id="floatingInputPassword" placeholder='' />
                        <label htmlFor="floatingInputPassword">Password</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control"  onChange={(e)=>{setUsername(e.target.value)}} id="floatingInputName" placeholder='' />
                        <label htmlFor="floatingInputName">Your Name</label>
                    </div>
                    <br/>
                        <Button variant="contained" onClick={handleSignUp}> Sign Up </Button>
                    </form>
                </div>
    </>
        
  );
};

export default SignUp;

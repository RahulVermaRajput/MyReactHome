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
    const [email, setEmail] = useState('');

    const handleSignUp = (event) => {
    event.preventDefault();

    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const passwordPattern = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[@#$%^&+=!])(?=\S+$).{8,}$/;
    const alphaPattern = /^[A-Za-z ]{3,}$/;

    console.log(username);
    console.log(password);
    console.log(loginid);

    if(emailPattern.test(email))
    {
        console.log("Email Done");
    }
    else{
        alert("Enter Valid Email");
        return;
    }
    if(passwordPattern.test(password))
    {
        console.log("Password Done Done");
    }
    else{
        alert("Invalid password. Password must be at least 8 characters long and include 1 uppercase letter, 1 lowercase letter, 1 special character, and 1 numeric character.");
        return;
    }
    if(alphaPattern.test(username))
    {
        console.log("UserName Done");
    }
    else{
        alert("Please enter at least 3 alphabetical characters.");
        return;
    }
    
    const url = 'https://6432926ed0127730d2d51abb.mockapi.io/rvapi/loginusers'
     axios.get(url).then((response)=>{
        const ifEmailExist = response.data.some(item => item.emailid === email);
        console.log(ifEmailExist);
        if(ifEmailExist)
        {
           alert(email +  " : This email is alreay registered with us");
        }
        else{
            axios.post('https://6432926ed0127730d2d51abb.mockapi.io/rvapi/loginusers',
            {
                username:username,
                emailid:email,
                password:password,
            }
            ).then((response)=>{
                //console.log(response);
            setEmail('');
            setPassword('');
            setUsername('');
            navigate('/login');
            alert("You are registered successfully with us!!!");
            }).catch((error)=>{
                console.log(error);
                alert(error);
            });
        }
        
      }).catch((error)=>{
        console.error(error);
      })
    
  };

  return (
    <>
                <div className="signupform" >
                    <form>
                        <h2>Sign Up Here</h2>
                        <br/>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" autoComplete='off' onChange={(e)=>{setEmail(e.target.value)}} id="floatingInputEmail" placeholder="name@example.com"/>
                        <label htmlFor="floatingInput">Email</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" className="form-control"  onChange={(e)=>{setPassword(e.target.value)}} id="floatingInputPassword" placeholder="name@example.com"/>
                        <label htmlFor="floatingInput">Password</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control"  onChange={(e)=>{setUsername(e.target.value)}} id="floatingInputName" placeholder="name@example.com"/>
                        <label htmlFor="floatingInput">User Name</label>
                    </div>
                    <br/>
                    <Button variant="contained" onClick={handleSignUp} > Sign Up </Button>

                    
                    </form>
                </div>
    </>
        
  );
};

export default SignUp;

import React, { useState } from 'react';
import axios from 'axios';
import { Outlet } from 'react-router-dom';


const CrudSignUp = () => {
    
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
                <div className="mx-auto my-auto" style={{width:"500px"}}>
                    <br/><br/>
                    <form>
                        <h4>Sign Up</h4>
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

                    <input type = "submit" className="btn btn-outline-primary" onClick={handleSignUp} value = "Sign Up"/>
                    </form>
                </div>
    </>
        
  );
};

export default CrudSignUp;

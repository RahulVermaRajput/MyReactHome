import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';


const CrudLoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    console.log(username);
    console.log(password);
  };

  return (
    <>
        <div className="row my-5 mx-5">
                <div className="col-sm-6">
                    <form>
                        <h3>Enter Login Credentials</h3>
                        <br/>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control"  onChange={(e)=>{setUsername(e.target.value)}} id="floatingInput" placeholder="name@example.com"/>
                        <label htmlFor="floatingInput">User ID</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" className="form-control"  onChange={(e)=>{setPassword(e.target.value)}} id="floatingInput" placeholder="name@example.com"/>
                        <label htmlFor="floatingInput">Password</label>
                    </div>
                    <input type = "submit" className="btn btn-outline-primary" onClick={handleLogin} value = "Login"/>
                    </form>
                </div>
            </div>
    </>
        
  );
};

export default CrudLoginPage;

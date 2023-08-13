import React, { useState } from 'react';


const CrudHome = () => {
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
                        <h3>This is CRUD Home Page.</h3>
                        <br/>
                </div>
            </div>
    </>
        
  );
};

export default CrudHome;

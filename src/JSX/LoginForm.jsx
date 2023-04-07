import { useState } from "react";
import "../CSS/common.css";
function LoginForm()
{
    const[fname,fnameNew] = useState();
    const[lname,lnameNew] = useState();
    const[fullName,fullNameNew] = useState();

    const displayData = (event) =>
    {
        fnameNew(event.target.value);
    }
    const displayData1 = (event) =>
    {
        lnameNew(event.target.value);
    }
    const submitData = (event) =>
    {
        event.preventDefault();
        fullNameNew(fname+" "+lname);
    }
    return (
        <><form onSubmit={submitData}>
            <div className="login_Container">
                <h2>Hello, {fullName}</h2>
                <input type="text" value={fname} onChange={displayData} className="form_control_input" placeholder="Enter Your First Name" /><br />
                <input type="text" value={lname} onChange={displayData1} className="form_control_input" placeholder="Enter Your Last Name" /><br />
                <input type="submit" className="btn" value="Submit" />
            </div>
        </form>
            <LoginForm1/>
        </>

    );
}

function LoginForm1()
{
 
    /* Use of Spread Operator */
    // const name = {fname:'Rahul',lname:'Verma'};
    // const address = {city:'Noida',state:'UP'};
    // const fullBio = {id:1,...name,age:26,...address,pincode:201301};
    //console.log(fullBio);
    /* Use of Spread Operator */
    
    const[fullName,setFullName] = useState({
        fname:"",
        lname:"",
        email:"",
        phone:"",
    });

    const displayData = (event) =>
    {
        
        const {name,value} = event.target;
        
        
        setFullName((prev)=>{
          console.log(prev);
          const ret ={
            ...prev,
            [name]: value
          }
          
            // if(name === 'fname')
            // {
            //     return{
            //         fname:value,
            //         lname:prev.lname,
            //         email:prev.email,
            //         phone:prev.phone
            //     };
            // }
            
            // else if(name === 'lname')
            // {
            //     return {
            //         lname:value,
            //         fname:prev.fname,
            //         email:prev.email,
            //         phone:prev.phone
            //     };
            // }
            // else if(name === 'email')
            // {
            //     return {
            //         lname:prev.lname,
            //         fname:prev.fname,
            //         email:value,
            //         phone:prev.phone
            //     };
            // }
            // else if(name === 'phone')
            // {
            //     return {
            //         lname:prev.lname,
            //         fname:prev.fname,
            //         email:prev.email,
            //         phone:value
            //     };
            // }

            console.log(ret);
            return ret;

        });
    }
   
    const submitData = (event) =>
    {
        event.preventDefault();
    }
    return (
        <form onSubmit={submitData}>
            <div className="login_Container">
               <h2>Hello, {fullName.fname} {fullName.lname} </h2>
               <p>{fullName.email}</p>
               <p>{fullName.phone}</p>
                <input type = "text" name = "fname" value = {fullName.fname} onChange={displayData} className="form_control_input"  placeholder="Enter Your First Name"/><br/>
                <input type = "text" name = "lname" value = {fullName.lname} onChange={displayData} className="form_control_input" placeholder="Enter Your Last Name"/><br/>
                <input type = "text" name = "email" value = {fullName.email} onChange={displayData} className="form_control_input" placeholder="Enter Your Email"/><br/>
                <input type = "text" name = "phone" value = {fullName.phone} onChange={displayData} className="form_control_input" placeholder="Enter Your Phone"/><br/>
                <input type = "submit" className="btn" value = "Submit"/>
            </div>
        </form>
    );
}

export default LoginForm;
export {LoginForm1};
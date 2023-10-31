import axios from "axios";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
const CrudAdd = () => {
    
    const [name,setName] = useState("");
    const [mail,setMail] = useState("");
    const [contact,setContact] = useState("");
    const [address,setAddress] = useState("");

    const header = {"Access-Control-Allow-Origin":"*"};
    const history = useNavigate();

    const savedata = (e)=>{
        e.preventDefault();
        if(name==="")
        {
            alert("Name is Required !!!");
            return false;
        }
        else if(mail==="")
        {
            alert("Mail is Required !!!");
            return false;
        }
        else if(contact==="")
        {
            alert("Contact is Required !!!");
            return false;
        }
        else if(address==="")
        {
            alert("Address is Required !!!");
            return false;
        }

        
        axios.post('https://6432926ed0127730d2d51abb.mockapi.io/rvapi/Users',
        {
            name:name,
            email:mail,
            contact:contact,
            address:address,
            header,
        }
        ).then((response)=>{
            console.log(response);
            history("/crudapp");
        }).catch((error)=>{
            console.log(error);
        });

    }

    return (
        <>
            <div className="row my-5 mx-5">
                <div className="col-sm-4">
                </div>
                <div className="col-sm-4">
                    {/* <NavLink className="btn btn-outline-secondary right my-2" to="/valid/crudapp/crudread" >Show All Users Data</NavLink> */}
                    {/* <p>Name : {name}</p>
                    <p>Mail : {mail}</p>
                    <p>Contact : {contact}</p>
                    <p>Address: {address}</p> */}
                    <form>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" value = {name} onChange={(e)=>{setName(e.target.value)}} id="floatingInput" placeholder="name@example.com"/>
                            <label htmlFor="floatingInput">Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" value = {mail} onChange={(e)=>{setMail(e.target.value)}} id="floatingInput" placeholder="name@example.com"/>
                            <label htmlFor="floatingInput">Email</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" value = {contact} onChange={(e)=>{setContact(e.target.value)}} id="floatingPassword" placeholder="Password"/>
                            <label htmlFor="floatingPassword">Contact</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" value = {address} onChange={(e)=>{setAddress(e.target.value)}} id="floatingPassword" placeholder="Password"/>
                            <label htmlFor="floatingPassword">Address</label>
                    </div>
                    <input type = "submit" className="btn btn-outline-primary" onClick={savedata} value = "Save"/>
                    </form>
                </div>
            </div>
        </>
    );
}
export default CrudAdd;
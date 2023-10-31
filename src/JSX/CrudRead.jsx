import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import { LinearProgress } from "@mui/material";

function CrudRead() {

    let [user, setUser] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            fetchData();
        }, 100);

    }, []);

    const deleteData = (id) => {
        axios.delete(`https://6432926ed0127730d2d51abb.mockapi.io/rvapi/Users/${id}`)
            .then((response) => {
                fetchData();
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const fetchData = () => {
        axios.get("https://6432926ed0127730d2d51abb.mockapi.io/rvapi/Users")
            .then((response) => {
                console.log(response.data);
                setUser(response.data);
            })
            .catch((error) => {
                console.log("error:" + error);
            });
    }

    function setLocalStorage(id, name, email, contact, address) {
        localStorage.setItem("id", id);
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("contact", contact);
        localStorage.setItem("address", address);
    }

    return (
        <div className="m-5">
            {/* <button class = "btn btn-primary btn-outlined" onClick={printData}>Print Data</button> <br/> */}
            <table className="table table-bordered">
                <thead className="table-active">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Mail</th>
                        <th scope="col">Contact</th>
                        <th scope="col">Address</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>

                {user.length<=0? <tr><td colSpan={6}> 
                   <div style={{width:'100%',height:'100%',textAlign:"center",fontSize:'20px'}}>
                    {/* <CircularProgress style={{fontSize:'40px',height:'200px',wordSpacing:'50'}} color="secondary"/> */}
                    <LinearProgress color="secondary" /><br/><br/><br/>
                    <LinearProgress color="secondary" /><br/><br/><br/>
                    <LinearProgress color="secondary" />
                    
                    <br/>
                    </div>
                </td></tr>:""}
              



                    {
                        user.map((u) => {
                            return (
                                <>
                                    <tr key={u.id}>
                                        <th scope="row">{u.id}</th>
                                        <td>{u.name}</td>
                                        <td>{u.email}</td>
                                        <td>{u.contact}</td>
                                        <td>{u.address}</td>
                                        <td>
                                            <NavLink to="/valid/crudapp/crudupdate"><button className="btn btn-primary btn-xs mx-0" onClick={() => setLocalStorage(u.id, u.name, u.email, u.contact, u.address)} ><EditIcon/></button></NavLink>

                                            <button className="btn btn-danger btn-xs mx-2" onClick={() => { deleteData(u.id) }} ><DeleteForeverIcon/></button>
                                        </td>
                                    </tr>
                                </>
                            );
                        })
                    }
                </tbody>
            </table>

            {/* <NavLink className="btn btn-outline-success btn-xs" to="/valid/crudapp/crudadd">Add New User</NavLink> */}

        </div>

    );
}

export default CrudRead;
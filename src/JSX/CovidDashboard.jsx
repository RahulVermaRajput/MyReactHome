import React, { useEffect, useState } from "react"; 
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
const CovidDashboard = () =>{
    
    const [data,setData] = useState([]);
    
    const getCovidData = async () =>{
        const response = await fetch('https://data.covid19india.org/data.json');
        console.log(response);
        var actualData = await response.json();
        console.log(actualData.statewise);
        setData(actualData.statewise);
    }



    useEffect(()=>{
        //alert("fetching")
        getCovidData();
    },[]);


    return(
        <>
            <div className= "container-xxl bg-info p5  pt-5 pb-5 bg-white black" >
            <h1 className="text-center" style={{color:'black'}}>India's Covid-19 Dashboard</h1>
            <br/>
            <div className="table-responsive">
                <br/>
            <table className="table table-striped table-bordered table-hover">
                <thead>
                <tr>
                    <th>State</th>
                    <th>Active</th>
                    <th>Confirmed</th>
                    <th>Recovered</th>
                    <th>Death</th>
                    <th>Last Updated</th>
                </tr>
                </thead>
                <tbody>
                    {
                        data.map((x)=>{
                            return (
                            <tr>
                                <td>{x.state}</td>
                                <td>{x.active}</td>
                                <td>{x.confirmed}</td>
                                <td>{x.recovered}</td>
                                <td>{x.deaths}</td>

                                <td>{x.lastupdatedtime}</td>
                            </tr>
                            )
                        })
                    }
                   
                </tbody>
            </table>
            </div>
            </div>

        </>
    );
}
export default CovidDashboard;
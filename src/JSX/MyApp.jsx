import React from "react";
import { CurrentTime,FTime , fulldatetime} from "./DateTime";
import CurrentDate from "./DateTime";
import "../CSS/MyApp.css";

const cardStyle = 
{ 
  boxShadow:'2px 2px 2px 2px grey',
  padding:'25px',
  width:'40%',
  textTransform: 'uppercase',
  background: '#F5C6EC',
  margin:'10px 20px',
  color:'#9A208C',
  transition: '0.01s'
};

function MyTimeCardWithInlineCSS()
{
    return (
      <div style={cardStyle}>
      <h2 style = {{color:'#E11299'}} >My Time Card with Inline CSS </h2>
      <hr/>
      <h3>
        Current DateTime is : {fulldatetime} <br/>
        Current Date is : <CurrentDate/> <br/>
        Current Time is : <CurrentTime/><br/>
        Current Time is (Formatted): <FTime/>
      </h3>
      </div>
    );
}
function MyTimeCardWithExternalCSS()
{
    return (
      <div className="card">
      <h2 style = {{color:'white'}} >My Time Card With External CSS</h2>
      <hr/>
      <h3>
        Current DateTime Is : {fulldatetime} <br/>
        Current Date Is : <CurrentDate/> <br/>
        Current Time Is : <CurrentTime/><br/>
        Current Time Is (Formatted): <FTime/>
      </h3>
      </div>
    );
}

export {MyTimeCardWithInlineCSS,MyTimeCardWithExternalCSS};
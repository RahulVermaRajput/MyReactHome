import { useState } from "react";
import "../CSS/common.css";

//const count = useState(1); // Here It is not used.

function UseStateHook()
{
    // UseState only used in functional components. 
    // It returns two parameter; First : Default Value , Second: functionForImplement  to update Default Value
    // Accept One Parameter for as Defaut Value
    const [count , countPlus] = useState(1); 

    const Increment = () =>{
        countPlus(count+1);
    }
    
    const [ctime,updatetime] = useState(new Date().toLocaleTimeString());

    function FetchTime(){
        updatetime(new Date().toLocaleTimeString());
    }
    setInterval(FetchTime, 1000);
    
    const [ftime,newtime] = useState(new Date().toLocaleTimeString());
    const newtimeOnClick = () =>{
        newtime(new Date().toLocaleTimeString());
    }

    const [bgColor,  newBgColor] = useState('#00005F');
    const [text,  newText] = useState('Click Me');
    const bgColorChange = () => {
        newBgColor('#00000F');
        newText('On Mouse Enter');
    }

    const bgColorReverse = () => {
        newBgColor('#22222F');
        newText('On Mouse Leave');
    }


    return(
        <>
            <div style={{background:bgColor,padding:'100px',textAlign:'center'}}>
                <input className="btn" type  = "button" onMouseEnter={bgColorChange} onMouseLeave = {bgColorReverse} value = {text}/>
            </div>

            <div style={{background:'#12345F',padding:'10px',textAlign:'center'}}>
                <h1 style = {{color:'white',textAlign:'center'}}>Use of UseState Hook</h1>
                <h2 style = {{color:'white',textAlign:'center'}}>Button is Clicked {count} times.</h2>
                <input className="btn" type  = "button" onClick={Increment} value = "Increment"/> <br/>
            </div>

           
            <div style={{background:'#12345F',padding:'10px',textAlign:'center'}}>
                <h2 style = {{color:'white',textAlign:'center'}}>Current Time using JS Interval : {ctime}</h2>
                <h2 style = {{color:'white',textAlign:'center'}}>Fetch Time : {ftime}</h2>
                <input className="btn" type  = "button" onClick={newtimeOnClick} value = "Fetch Time"/>
            </div>

            
        
        </>

        
    );
}

export default UseStateHook;
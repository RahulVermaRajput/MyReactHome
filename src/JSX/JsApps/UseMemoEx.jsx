import { useMemo, useState } from "react";

const UseMemoEx = () => {

  const [first, setfirst] = useState(0);
  const [second, setsecond] = useState(0);

  const x =  useMemo(()=>timeTakingFunc(first),[second]);
  console.log(x);

  const incrementOne = ()=>{
    setfirst(first+1);
  }
  const incrementTen = async ()=>{
   
    setsecond(second+10);
  }

return(
  <>
  <div className="row">
      <div className="col-sm-6">
        <h1>Counter 1</h1>
          <br/>
          <h2>{first}</h2>
          <input type = "button" className="btn btn-primary" onClick={incrementOne} value = "Increment 1"/>
        </div>
      <div className="col-sm-6"><h1>Counter 2</h1>
      <br/>
          <h2>{second}</h2>
          <input type = "button" className="btn btn-primary" onClick={incrementTen} value = "Increment 10"/>
      </div>
    </div>
  </>
)


  
};

const timeTakingFunc = (num)=>{
  console.log("start");
  setTimeout(() => {
    console.log("Function executed");  
  }, 1000);
  
  return num+1;
}



export default UseMemoEx;

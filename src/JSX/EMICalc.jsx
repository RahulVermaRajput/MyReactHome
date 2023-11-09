import { useState } from "react";
import "../CSS/Calc.css";

function getPMT(principal,interest,tenure)
{
    console.log(principal);
    console.log(interest);
    console.log(tenure);

    let pmt = 0;
    const a = (principal * interest/1200 );
    const b = (1+interest/1200);
    const c = (-tenure);
    const d = Math.pow(b,c);
    const e = (1-d);

    pmt = a/e;
    console.log(pmt);
    return Math.round(pmt);
}

const  EMICalc = ()=>
{

    const [pmt, setpmt] = useState(0);
    const [principal, setPrincipal] = useState(0);
    const [interest, setInterest]  = useState(0);
    const [tenure, setTenure]  = useState(0);

    const calculatePMT = ()=>{
        const p = getPMT(principal,interest,tenure);
        setpmt(p);
    }

    const resetValues = ()=>{
        setPrincipal(0);
        setInterest(0);
        setTenure(0);
        setpmt(0);
    }


    return (
        <div className="calc">
            <h1>EMi Calculator</h1>
            <input type = "text" value={principal} name = "principal" placeholder="Enter Principal Amount" onChange={(event)=>setPrincipal(event.target.value)}/>
            <input type = "text" value = {interest} name = "interest" placeholder="Interest % P.A" onChange={(event)=>setInterest(event.target.value)} />
            <input type = "text" value={tenure} name = "tenure" placeholder="Tenure(Months)" onChange={(event)=>setTenure(event.target.value)}/>
            
            <input type = "button" value = "Calculate EMI" onClick={calculatePMT}/>
            <input type = "button" value = "Reset Values" onClick={resetValues}/>

            <h2>PMT : {pmt} </h2>
        </div>
    );
}
export default EMICalc;



// P = 10000
// R = 14 % P.A
// N = 6 months.

// PMT = (P * R/1200 ) / (1-(1+R/1200)^(-N))


// A =  (P * R/1200 )
// B = (1-(1+R/1200)^(-N))
// PMT = A/B
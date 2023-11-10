import { useState } from "react";
import "../../CSS/jsapps.css";


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

const getMonthlyInterest = (principal,interest)=>{
    const interestValue = ((principal*interest)/1200);
    return Math.round(interestValue);
}

const monthlyEmiBreakup = (principal,interest,tenure)=>{
    // let principal = 10000;
    // let interest = 14;
    // let tenure = 12;
    const pmt = getPMT(principal ,interest,tenure);
    var monthlyEmiList = []; 
    for(var i=1;i<=tenure;i++)
    {
        const monthLyEMiData = {emi:0, interest:0,repaid:0,balance:0};
        const intValue = getMonthlyInterest(principal,interest);
        const repaid = pmt - intValue;
        monthLyEMiData.emi = pmt;
        monthLyEMiData.interest = intValue;
        monthLyEMiData.repaid = repaid;
        monthLyEMiData.balance = principal- repaid;
        principal =  principal- repaid;
        monthlyEmiList.push(monthLyEMiData);
    }
   // console.log(monthlyEmiList);
    return monthlyEmiList;
} 



const  EMICalc = ()=>
{

    const [pmt, setpmt] = useState(0);
    const [principal, setPrincipal] = useState(0);
    const [interest, setInterest]  = useState(0);
    const [tenure, setTenure]  = useState(0);
    const [emiData, setEmiData] = useState([]);

    const calculateEMI = ()=>{
        const p = getPMT(principal,interest,tenure);
        const emiDataList = monthlyEmiBreakup(principal,interest,tenure);
       // console.log(emiDataList);
        setEmiData(emiDataList);
        setpmt(p);
    }

    const resetValues = ()=>{
        setPrincipal(0);
        setInterest(0);
        setTenure(0);
        setpmt(0);
        setEmiData([]);
    }

    return (
        <>
         <h1>EMi Calculator</h1>
        <div className="inuputContainer">

        <div class="mb-5">
            <label for="principal" class="form-label">Principal Amount</label>
            <input type = "text" className="form-control" value={principal} name = "principal" id = "principal" placeholder="Enter Principal Amount" onChange={(event)=>setPrincipal(event.target.value)}/>
        </div>

        <div class="mb-5">
            <label for="interest" class="form-label">Interest % P.A</label>
            <input type = "text" className="form-control" value = {interest} name = "interest" id="interest" placeholder="Interest % P.A" onChange={(event)=>setInterest(event.target.value)} />
        </div>

        <div class="mb-5">
            <label for="tenure" class="form-label">Tenure(Months)</label>
            <input type = "text" className="form-control" value={tenure} name = "tenure" id = "tenure" placeholder="Tenure(Months)" onChange={(event)=>setTenure(event.target.value)}/>
        </div>
        <div class="mb-5">
            <input type = "button" value = "Calculate EMI" className="btn btn-primary btn-xs" id = "calculateEmi" onClick={calculateEMI}/>
        </div>
        <div class="mb-0">
            <input type = "button" style={{marginRight:'10px'}} className="btn btn-primary btn-xs" id ="reset" value = "Reset Values" onClick={resetValues}/>
        </div>
        
        
        </div>

        <h2>PMT : {pmt} </h2>
            <hr/>
            <hr/>


            <table className="table table-bordered table-hover">
                <thead className="info">
                    <th>Sr No.</th>
                    <th>Monthly Installment</th>
                    <th>Interest</th>
                    <th>Principal Repaid</th>
                    <th>Principal Balance </th>
                </thead>
               
                {
                    emiData.map((emi,index)=>(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{emi.emi}</td>
                            <td>{emi.interest}</td>
                            <td>{emi.repaid}</td>
                            <td>{emi.balance}</td>
                        </tr>
                    ))
                }
               
            </table>
           
     

        
        </>
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
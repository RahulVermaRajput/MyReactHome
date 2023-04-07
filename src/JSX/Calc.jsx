import "../CSS/Calc.css";

const x = 10;
const y = 3;

function sum(a,b)
{
    return a+b;
}
function sub(a,b)
{
    return a-b;
}
function div(a,b)
{
    return (a/b).toFixed(2);
}
function mul(a,b)
{
    return a*b;
}

function Calc()
{
    return (
        <div className="calc">
            <h2>Sum of {x} and {y}  is : {sum(x,y)}</h2>
            <h2>Sub of {x} and {y}  is : {sub(x,y)}</h2>
            <h2>Div of {x} and {y}  is : {div(x,y)}</h2>
            <h2>Mul of {x} and {y}  is : {mul(x,y)}</h2>
        </div>
    );
}
export default Calc;
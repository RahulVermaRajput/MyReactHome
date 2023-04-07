import React from "react";
import ReactDOM from "react-dom/client";
import App from "./JSX/App";
import { BrowserRouter } from "react-router-dom";
// import CovidDashboard from "./JSX/CovidDashboard";
// import {MyTimeCardWithInlineCSS,MyTimeCardWithExternalCSS} from "./JSX/MyApp";
// import Greeting from "./JSX/Greeting";
//  import IncrementDecrement from "./JSX/IncrementDecrement";
// import TestContext from "./JSX/TestContext";
// import { Component1 } from "./JSX/TestContext";
// import UseEffectHook from "./JSX/UseEffectHook";
// import Calc from "./JSX/Calc";
// import ImageCardList from "./JSX/ImageCardList";
// import UseStateHook from "./JSX/UseStateHook";
// import LoginForm from "./JSX/LoginForm";
// const myFirstElement = 
// <>
// <div style = {{display:'flex'}}>
// <MyTimeCardWithInlineCSS/> 
// <MyTimeCardWithExternalCSS/>
// </div>
// </>

const mySite = ReactDOM.createRoot(document.getElementById('mysite'));
mySite.render(
<BrowserRouter>
    <App/>
</BrowserRouter>
);


// const root10 = ReactDOM.createRoot(document.getElementById('covidDashboard'));
// root10.render(<CovidDashboard/>);


// const root9 = ReactDOM.createRoot(document.getElementById('useEffectHook'));
// root9.render(<UseEffectHook/>);


// const root8 = ReactDOM.createRoot(document.getElementById('testcontext'));
// root8.render(<Component1/>);

// const root7 = ReactDOM.createRoot(document.getElementById('inc_dec'));
// root7.render(<IncrementDecrement/>);

// const root6 = ReactDOM.createRoot(document.getElementById('loginform'));
// root6.render(<LoginForm/>);

// const root5 = ReactDOM.createRoot(document.getElementById('hooks'));
// root5.render(<UseStateHook/>);

// const root4 = ReactDOM.createRoot(document.getElementById('imagecards'));
// root4.render(<ImageCardList/>);

// const root3 = ReactDOM.createRoot(document.getElementById('calc'));
// root3.render(<Calc/>);

// const root2 = ReactDOM.createRoot(document.getElementById('card'));
// root2.render(myFirstElement);

// const root1 = ReactDOM.createRoot(document.getElementById('greet'));
// root1.render(<Greeting/>);

//ReactDOM.render(<Calc/>,document.getElementById('greet'));
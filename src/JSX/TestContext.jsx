import React from "react";
import { useContext,createContext } from "react";

const UserContext = createContext();
export default function TestContext()
{
    
    return(
        <>
            <h1>Test Context</h1>
        </>
    );
}
function Component1() {
    return (
        <>
      <UserContext.Provider value={"Rahul Verma"}>
      <Component2 />
      </UserContext.Provider>
       </>
    );
  }
  function Component2() {
    return (
      <>
        <h1>Component 2</h1>
        <Component3 />
      </>
    );
  }
  
  function Component3() {
    return (
      <>
        <h1>Component 3</h1>
        <Component4 />
      </>
    );
  }
  
  function Component4() {
    const user = useContext(UserContext);
    return (
      <>
        <h1>Component 4</h1>
        <h2>Hello {user} from component 4!</h2>
      </>
    );
  }
  
  export {Component1,Component2};
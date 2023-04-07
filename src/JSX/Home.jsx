import React from "react";
import Greeting from "../JSX/Greeting"
function Home()
{
    return (
        <>
            <div class="row">
                <div class="col-10 mx-auto">
                    <div class="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                        <br/>
                        <Greeting/>
                        <br/>
                        <a href = "#123" className="btn-get-started btn btn-round btn-primary" >Get Started</a>

                    </div>
                    <div class="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">

                    </div>
                </div>
            </div>
        </>
    );
}
export default Home;
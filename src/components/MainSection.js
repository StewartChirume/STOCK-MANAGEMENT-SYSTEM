import React from "react";
import "../assets/css/Stylesheet.css";

class  MainSection extends React.Component {
    render() {
        return (
            <>
            <section className="section4MainSection">
                <div className ="container">
                    <div className ="row align-items-center">
                        <div className ="col-lg-6 order-lg-2">
                            <div className ="p-5"></div>
                        </div>
                        <div className ="col-lg-6 order-lg-1">
                            <div className ="p-5">
                                <h1 className ="display-5">For more access please make use of the Navigation Bar above. Thank you.</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="secondMainSection">
                <div className ="container">
                    <div className ="row align-items-center">
                        <div className ="col">
                        </div>
                    </div>
                </div>
            </section>
            </>
        )
    }
}

export default MainSection;
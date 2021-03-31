import React from "react";
import {Link} from "react-router-dom";
import "../assets/bootstrap/css/bootstrap.min.css";
import "../assets/css/Stylesheet.css";

class Header extends React.Component {
    render() {
        return (          
            <header className ="text-center text-white masthead">
                <div className ="masthead-content">
                    <div className ="container">
                        <h1 className ="masthead-heading mb-0">Stock</h1>
                        <h2 className ="masthead-subheading mb-0">Management System</h2>
                        <Link className ="btn btn-primary btn-xl rounded-pill mt-5" role="button" to="./add-product">Add Stock</Link>
                    </div>
                </div>
                <div className ="bg-circle-1 bg-circle"></div>
                <div className ="bg-circle-2 bg-circle"></div>
                <div className ="bg-circle-3 bg-circle"></div>
                <div className ="bg-circle-4 bg-circle"></div>
            </header>
        )
    }
}

export default Header;
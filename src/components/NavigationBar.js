import  React from "react";
import { Link } from "react-router-dom";
import {Navbar, Nav} from "react-bootstrap";
import "../assets/bootstrap/css/bootstrap.min.css";
import "../assets/css/Stylesheet.css";

class NavigationBar extends React.Component {
    render() {
        return (
            <Navbar className ="navbar navbar-light fixed-top navbar-custom" expand="lg">
                <Link className ="navbar-brand" to="/">Stewart</Link>
                <Navbar.Toggle className="justify-content-center" aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                    <Nav>
                    <ul className ="navbar-nav ml-auto">
                            <li className ="nav-item">
                                <Link to ="/" className ="nav-link">Home</Link>
                            </li>
                            <li className ="nav-item">
                                <Link to ="/add-product" className ="nav-link">Add stock</Link>
                            </li>
                            <li className ="nav-item">
                                <Link to="/remove-product" className ="nav-link">Remove stock</Link>
                            </li>
                        </ul>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default NavigationBar;

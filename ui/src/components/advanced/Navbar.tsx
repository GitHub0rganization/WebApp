import React from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";

export const Navbar = () => (
    <Router>
        <MDBNavbar color="indigo" dark expand="md">
            <MDBNavbarBrand>
            <strong className="white-text">linqs</strong>
            </MDBNavbarBrand>
            <MDBNavbarNav right>
                <MDBNavItem active>
                <MDBNavLink to="#!">ログイン</MDBNavLink>
                </MDBNavItem>
            </MDBNavbarNav>
        </MDBNavbar>
    </Router>
)
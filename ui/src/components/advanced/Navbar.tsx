import React from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
} from "mdbreact";

export const Navbar = () => (
    <MDBNavbar color="white" expand="sm">
        <MDBNavbarBrand>
        <strong className="black-text">linqs</strong>
        </MDBNavbarBrand>
        <MDBNavbarNav right>
        <MDBNavItem>
            <MDBNavLink to="/login" className="black-text">
            ログイン
            </MDBNavLink>
        </MDBNavItem>
        </MDBNavbarNav>
    </MDBNavbar>
);
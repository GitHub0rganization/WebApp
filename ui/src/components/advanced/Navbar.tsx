import React, {useEffect, useState} from 'react';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
} from 'mdbreact';
import {checkAuth} from '../../services/AuthService';

export const Navbar = () => {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const ok = checkAuth();
    setAuth(ok);
  }, []);

  return (
    <MDBNavbar color="white" expand="sm">
      <MDBNavbarBrand>
        <a href="/">
          <img src="linqs.svg" alt="linqs" style={{width: '80%'}} />
        </a>
      </MDBNavbarBrand>
      <MDBNavbarNav right className="d-flex flex-row">
        {auth ? (
          <React.Fragment>
            <MDBNavItem>
              <MDBNavLink to="/username/qrcode" className="black-text">
                <img
                  src="qrcode.png"
                  alt="QR Code"
                  className="img-fluid"
                  style={{width: '80%', maxWidth: 500}}
                />
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/username" className="black-text">
                <img
                  src="header-userpage.svg"
                  alt="QR Code"
                  className="img-fluid"
                />
              </MDBNavLink>
            </MDBNavItem>
          </React.Fragment>
        ) : (
          <MDBNavItem>
            <MDBNavLink to="/login" className="black-text">
              ログイン
            </MDBNavLink>
          </MDBNavItem>
        )}
      </MDBNavbarNav>
    </MDBNavbar>
  );
};

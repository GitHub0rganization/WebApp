import React, {useEffect, useState} from 'react';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
} from 'mdbreact';
import Logo from '../../assets/images/linqs.svg';
import {checkAuth} from '../../services/AuthService';
import {FontSize} from '../../utils/variables';

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
          <img src={Logo} alt="linqs" style={{width: '80%'}} />
        </a>
      </MDBNavbarBrand>
      <MDBNavbarNav right className="d-flex flex-row">
        {auth ? (
          <React.Fragment>
            <MDBNavItem>
              <MDBNavLink to="/username/qrcode" className="black-text">
                <i
                  className="fas fa-qrcode"
                  style={{fontSize: FontSize.X_LARGE}}
                ></i>
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/username" className="black-text">
                <i
                  className="fas fa-user-circle"
                  style={{fontSize: FontSize.X_LARGE}}
                ></i>
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

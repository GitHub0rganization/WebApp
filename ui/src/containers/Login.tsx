import React from 'react';
import {MDBContainer, MDBCol, MDBRow, MDBBtn} from 'mdbreact';
import {Navbar} from '../components/advanced/Navbar';
import {Footer} from '../components/advanced/Footer';

export const Login = () => (
  <React.Fragment>
    <Navbar />
    <MDBContainer className="d-flex flex-column align-items-center justify-content-center mt-5 mb-5">
      <MDBRow>
        <MDBCol sm="12">
          <h2 className="m-4 text-center">ようこそ！</h2>
          <p className="p-2 font-weight-bold text-center">
            ソーシャルアカウントで登録orログイン
          </p>
          <div className="d-flex flex-column">
            <MDBBtn
              className="p-2 text-white text-capitalize"
              // color=" light-blue accent-3"
            >
              <i className="fab fa-twitter pr-2"></i>
              Twitterで登録/ログイン
            </MDBBtn>
            <MDBBtn
              className="p-2 text-white text-capitalize"
              // color=" light-blue darken-4"
            >
              <i className="fab fa-facebook-f pr-2"></i>
              Facebookで登録/ログイン
            </MDBBtn>
            <MDBBtn className="p-2 text-black text-capitalize">
              <i className="fab fa-google pr-2"></i>
              Googleで登録/ログイン
            </MDBBtn>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    <Footer />
  </React.Fragment>
);

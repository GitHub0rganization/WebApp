import React, {Fragment} from 'react';
import {MDBContainer, MDBCol, MDBRow, MDBCard, MDBInput} from 'mdbreact';
import * as Color from '../utils/variables';
import {Navbar} from '../components/advanced/Navbar';

export const UserEdit = () => {
  return (
    <React.Fragment>
      <Navbar />
      <MDBContainer>
        <MDBRow>
          <MDBCol sm="12" className="m-3 py-3">
            <img
              src="https://mdbootstrap.com/img/Photos/Avatars/avatar-1.jpg"
              className="rounded-circle rounded mx-auto d-block"
              alt="aligment"
            />
            <h5 style={{color: Color.Color.BASE, textDecoration: "underline", textDecorationColor: Color.Color.BASE, textAlign: "center"}}>
              Change your profile photo.
            </h5>
            <MDBRow>
              <MDBCol md="6">
                <MDBCard className="card-body p-4 round">
                  Name
                  <MDBInput label="Material input" />
                  Place
                  <MDBInput label="Material input" />
                  More
                  <MDBInput label="Material input" />
                  <Fragment>
                    <button>Cansel</button>
                    <button style={{color: Color.Color.BASE}}>OK</button>
                  </Fragment>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </React.Fragment>
  );
};

import {MDBCardBody, MDBCardText, MDBCardTitle, MDBCol, MDBRow} from 'mdbreact';
import React from 'react';

export const FriendsList = () => (
  <MDBRow>
    <MDBCol md="6">
      <MDBCardBody>
        <MDBCardTitle>Special Title Treatment</MDBCardTitle>
        <MDBCardText>
          With supporting text below as a natural lead-in to additional content.
        </MDBCardText>
      </MDBCardBody>
    </MDBCol>
  </MDBRow>
);

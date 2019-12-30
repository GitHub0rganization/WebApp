import React from 'react';
import {MDBRow, MDBCol, MDBCardBody, MDBCardTitle, MDBCardText} from 'mdbreact';

export const Favorites = () => (
  <MDBRow>
    <MDBCol md="6">
      <MDBCardBody>
        <MDBCardTitle>Favorites</MDBCardTitle>
        <MDBCardText>
          With supporting text below as a natural lead-in to additional content.
        </MDBCardText>
      </MDBCardBody>
    </MDBCol>
  </MDBRow>
);

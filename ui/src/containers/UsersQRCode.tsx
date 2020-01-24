import React from 'react';
import {MDBCard, MDBContainer, MDBCol, MDBRow} from 'mdbreact';
import QRCode from 'qrcode.react';

export const UsersQRCode = () => {
  const currentUrl = window.location.href;

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol sm="12" className="py-3">
          <MDBRow>
            <MDBCol sm="12">
              <h2 className="py-2 text-center">Scan!</h2>
              <MDBCard className="card-body p-5 round text-center">
                <QRCode value={currentUrl} style={{margin: '0 auto'}} />
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

import React from 'react'
import { MDBContainer, MDBCol, MDBRow} from "mdbreact";
import { Navbar } from "../components/advanced/Navbar";
import { Footer } from "../components/advanced/Footer"

export const Home = () => (
  <React.Fragment>
    <Navbar />
    <MDBContainer>
      <MDBRow>
        <MDBCol sm="12">
          <h1 className="black-text">ホーム</h1>
        

        </MDBCol>
      </MDBRow>
    </MDBContainer>
    <Footer />
  </React.Fragment>
);
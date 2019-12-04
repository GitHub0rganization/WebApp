import React from 'react'
import { MDBContainer, MDBCol, MDBRow, MDBBtn } from "mdbreact";
import { Navbar } from "../components/advanced/Navbar";
import { Footer } from "../components/advanced/Footer"

export const NotFound = () => (
    <React.Fragment>
        <Navbar />
        <MDBContainer>
            <MDBRow>
                <MDBCol sm="12" className="my-4">
                    <h1>404</h1>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
        <Footer />
    </React.Fragment>
);
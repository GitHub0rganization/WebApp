import React from 'react'
import { MDBContainer, MDBCol, MDBRow, MDBBtn } from "mdbreact";
import { Navbar } from "../components/advanced/Navbar";
import { Footer } from "../components/advanced/Footer"
import { Tabs } from "../components/advanced/Tabs"

export const User = () => {
    return (
        <React.Fragment>
            <Navbar />
            <MDBContainer>
                <MDBRow>
                    <MDBCol sm="12" className="py-4">
                        <Tabs />
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <Footer />
        </React.Fragment>
    );
}
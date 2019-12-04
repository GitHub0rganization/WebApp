import React from 'react'
import {
    MDBContainer,
    MDBTabPane,
    MDBTabContent,
    MDBNav,
    MDBNavItem,
    MDBNavLink,
    MDBRow,
    MDBCol,
    MDBBtn,
    MDBCard,
    MDBCardTitle,
    MDBCardText,
    MDBIcon,
} from "mdbreact";
import {NestTabs} from '../advanced/NestTabs'

export const Profile = () => (
    <MDBRow>
        <MDBCol md="6">
            <MDBCard className="card-body p-4">
                <div className="user-image-name d-flex flex-row">
                    <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-1.jpg" className="circle float-left mr-4 z-depth-1" alt="aligment" />
                    <div className="d-flex flex-column my-3">
                        <h4>Username</h4>
                        <p className="small">エンジニア</p>
                    </div>
                </div>
                <MDBCardText className="mt-4 mb-4">
                    Some quick example text to build on the panel title and make up the
                    bulk of the panel's content.
                </MDBCardText>
            </MDBCard>
            <NestTabs />
        </MDBCol>
    </MDBRow>
)
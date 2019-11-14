import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

export const Footer = () => (
    <MDBFooter color="black" className="font-small pt-4 mt-4 fixed-bottom">
    <MDBContainer className="text-center">
        <MDBRow>
        <MDBCol md="12">
            <h3 className="title">linqs</h3>
            <ul className="center-block">
            <li className="list-unstyled">
                <a href="#!">利用規約</a>
            </li>
            <li className="list-unstyled">
                <a href="#!">プライバシーポリシー</a>
            </li>
            <li className="list-unstyled">
                <a href="#!">お問い合わせ</a>
            </li>
            </ul>
        </MDBCol>
        </MDBRow>
    </MDBContainer>
    <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
        &copy; {new Date().getFullYear()} Copyright:{" "}
        <a href="#"> linqs.me </a>
        </MDBContainer>
    </div>
    </MDBFooter>
);



import React, { useState } from "react";
import {
    MDBContainer,
    MDBTabPane,
    MDBTabContent,
    MDBNav,
    MDBNavItem,
    MDBNavLink,
    MDBIcon
} from "mdbreact";
import { Color } from '../../utils/variables'
import { FriendsList } from '../../containers/FriendsList'
import { Profile } from './Profile'

export const NestTabs = () => {
    const [activeItemOuterTabs, setActiveItemOuterTabs] = useState("1")

    const toggleOuterTabs = (tab: any) => (e: any) => {
        if (activeItemOuterTabs !== tab) {
            setActiveItemOuterTabs(tab)
        }
    };

    const textColorOne = activeItemOuterTabs === "1" ? Color.BASE : Color.GRAY_DARK
    const textColorTwo = activeItemOuterTabs === "2" ? Color.BASE : Color.GRAY_DARK

    return (
        <React.Fragment>
            <MDBNav tabs className="nav-justified mb-3 mt-4 flex-row round">
                <MDBNavItem className={`${activeItemOuterTabs === "1" && "border-bottom"}`}>
                    <MDBNavLink to="#" className="m-1 round"
                        active={activeItemOuterTabs === "1"}
                        onClick={toggleOuterTabs("1")}
                        role="tab"
                        style={{ color: textColorOne}}
                    >
                        <MDBIcon far icon="address-book" style={{fontSize: '32px',color: textColorOne}} />
                        <p className="small my-1">Favorites</p>
                    </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem className={`${activeItemOuterTabs === "2" && "border-bottom"}`}>
                    <MDBNavLink to="#" className="m-1 round"
                        active={activeItemOuterTabs === "2"}
                        onClick={toggleOuterTabs("2")}
                        role="tab"
                        style={{color: textColorTwo }}
                    >
                        <MDBIcon icon="link" style={{ fontSize: '32px', color: textColorTwo}}/>
                        <p className="small my-1">Links</p>
                    </MDBNavLink>
                </MDBNavItem>
            </MDBNav>
            <MDBTabContent
                className="mb-5"
                activeItem={activeItemOuterTabs}
            >
                <MDBTabPane tabId="1" role="tabpanel">
                    <h1>aaa</h1>
                </MDBTabPane>
                <MDBTabPane tabId="2" role="tabpanel">
                    <h1>bbb</h1>
                </MDBTabPane>
            </MDBTabContent>
        </React.Fragment>
    );
}

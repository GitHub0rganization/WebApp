
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
import { Color, FontSize } from '../../utils/variables'
import { Favorites } from '../advanced/Favorites'
import { Links } from '../advanced/Links'

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
                    <MDBNavLink to="/username/favorites" className="m-1 round"
                        active={activeItemOuterTabs === "1"}
                        onClick={toggleOuterTabs("1")}
                        role="tab"
                        style={{ color: textColorOne}}
                    >
                        <MDBIcon far icon="address-book" style={{fontSize: FontSize.XX_LARGE ,color: textColorOne}} />
                        <p className="small my-1">Favorites</p>
                    </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem className={`${activeItemOuterTabs === "2" && "border-bottom"}`}>
                    <MDBNavLink to="/username/links" className="m-1 round"
                        active={activeItemOuterTabs === "2"}
                        onClick={toggleOuterTabs("2")}
                        role="tab"
                        style={{color: textColorTwo }}
                    >
                        <MDBIcon icon="link" style={{ fontSize: FontSize.XX_LARGE, color: textColorTwo}}/>
                        <p className="small my-1">Links</p>
                    </MDBNavLink>
                </MDBNavItem>
            </MDBNav>
            <MDBTabContent
                className="mb-5"
                activeItem={activeItemOuterTabs}
            >
                <MDBTabPane tabId="1" role="tabpanel">
                    <Favorites />
                </MDBTabPane>
                <MDBTabPane tabId="2" role="tabpanel">
                    <Links />
                </MDBTabPane>
            </MDBTabContent>
        </React.Fragment>
    );
}

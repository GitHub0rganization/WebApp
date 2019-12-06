import React, { useState } from 'react'
import {
  MDBContainer,
  MDBTabPane,
  MDBTabContent,
  MDBNav,
  MDBNavItem,
  MDBNavLink,
} from 'mdbreact'
import { Color } from '../../utils/variables'
import { FriendsList } from '../../containers/FriendsList'
import { Profile } from '../../containers/Profile'

export const Tabs = () => {
  const [activeItemOuterTabs, setActiveItemOuterTabs] = useState('1')

  const toggleOuterTabs = (tab: any) => (e: any) => {
    if (activeItemOuterTabs !== tab) {
      setActiveItemOuterTabs(tab)
    }
  }

  const backGroundOne = activeItemOuterTabs === '1' ? Color.BASE : 'white'
  const textColorOne = activeItemOuterTabs === '1' ? 'white' : Color.BASE

  const backGroundTwo = activeItemOuterTabs === '2' ? Color.BASE : 'white'
  const textColorTwo = activeItemOuterTabs === '2' ? 'white' : Color.BASE

  return (
    <MDBContainer>
      <MDBNav tabs className="nav-justified mb-3 card flex-row round">
        <MDBNavItem className="">
          <MDBNavLink
            to="/username"
            className="m-1 round"
            active={activeItemOuterTabs === '1'}
            onClick={toggleOuterTabs('1')}
            role="tab"
            style={{ backgroundColor: backGroundOne, color: textColorOne }}
          >
            My Profile
          </MDBNavLink>
        </MDBNavItem>
        <MDBNavItem className="">
          <MDBNavLink
            to="/username/friends"
            className="m-1 round"
            active={activeItemOuterTabs === '2'}
            onClick={toggleOuterTabs('2')}
            role="tab"
            style={{ backgroundColor: backGroundTwo, color: textColorTwo }}
          >
            Friends List
          </MDBNavLink>
        </MDBNavItem>
      </MDBNav>
      <MDBTabContent className="mb-5" activeItem={activeItemOuterTabs}>
        <MDBTabPane tabId="1" role="tabpanel">
          <Profile />
        </MDBTabPane>
        <MDBTabPane tabId="2" role="tabpanel">
          <FriendsList />
        </MDBTabPane>
      </MDBTabContent>
    </MDBContainer>
  )
}

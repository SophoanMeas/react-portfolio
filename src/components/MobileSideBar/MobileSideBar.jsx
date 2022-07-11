import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink} from '../style/MobileSideBar.style'

export default function MobileSideBar() {
  return (
    <SidebarContainer>
      <Icon>
        <CloseIcon/>
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/about">About
          </SidebarLink>
          <SidebarLink to="/profile">Profile
          </SidebarLink>
          <SidebarLink to="/contact">Contact
          </SidebarLink>
          <SidebarLink to="/resume">Resume
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

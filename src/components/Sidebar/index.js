import React from 'react'
import { 
    SidebarContainer, 
    Icon, 
    CloseIcon, 
    SidebarWrapper, 
    SidebarMenu, 
    SidebarLink, 
} from './SidebarElements';

export const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='info' onClick={toggle}>
                        Info
                    </SidebarLink>
                    <SidebarLink to='menu' onClick={toggle}>
                        Menu
                    </SidebarLink>
                    <SidebarLink to='events' onClick={toggle}>
                        Events
                    </SidebarLink>
                    <SidebarLink to='press' onClick={toggle}>
                        Press
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;

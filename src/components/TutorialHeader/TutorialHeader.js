import React from 'react';
import AppSwitcher20 from "@carbon/icons-react/lib/app-switcher/20";
import Notification20 from '@carbon/icons-react/lib/notification/20';
import UserAvatar20 from '@carbon/icons-react/lib/user--avatar/20';
import {
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderGlobalAction,
  HeaderGlobalBar,
  SkipToContent,
  HeaderMenuButton,
  HeaderContainer,
  HeaderMenu,
  SideNav,
  SideNavItems,
  HeaderSideNavItems,
} from "carbon-components-react/lib/components/UIShell";
import { Link } from 'react-router-dom';

const TutorialHeader = () => (
  <HeaderContainer
    render={({ isSideNavExpanded, onClickSideNavExpand }) => {
          window.addEventListener(
            'resize',
            () => {
              const viewportWidth =
                window.innerWidth || document.documentElement.clientWidth;
              if (viewportWidth > 1056) {
                if (isSideNavExpanded === true) onClickSideNavExpand();
              }
            },
            false
          );
          return (
      <>
        <Header aria-label="IBM Platform Name"
          onClick={
            isSideNavExpanded === true ? onClickSideNavExpand : null
          }>
          <SkipToContent />
          <HeaderMenuButton
            aria-label="Open menu"
            onClick={onClickSideNavExpand}
            isActive={isSideNavExpanded}
          />
          <HeaderName element={Link} to="/" prefix="IBM">
            [Platform]
        </HeaderName>
          <HeaderNavigation aria-label="IBM [Platform]">
            <HeaderMenuItem element={Link} to="/repos">Repositories</HeaderMenuItem>
            <HeaderMenuItem href="#">Link 2</HeaderMenuItem>
            <HeaderMenuItem href="#">Link 3</HeaderMenuItem>
            <HeaderMenu aria-label="Link 4" menuLinkName="Link 4">
              <HeaderMenuItem href="#">Sub-link 1</HeaderMenuItem>
              <HeaderMenuItem href="#">Sub-link 2</HeaderMenuItem>
              <HeaderMenuItem href="#">Sub-link 3</HeaderMenuItem>
            </HeaderMenu>
          </HeaderNavigation>
          <SideNav
            aria-label="Side navigation"
            expanded={isSideNavExpanded}
            isPersistent={false}>
            <SideNavItems>
              <HeaderSideNavItems>
                <HeaderMenuItem element={Link} to="/repos">
                  Repositories
              </HeaderMenuItem>
                <HeaderMenuItem href="#">
                  Link 2
              </HeaderMenuItem>
                <HeaderMenuItem href="#">
                  Link 3
              </HeaderMenuItem>
                <HeaderMenu
                  aria-label="Link 4"
                  menuLinkName="Link 4">
                  <HeaderMenuItem href="#">Sub-link 1</HeaderMenuItem>
                  <HeaderMenuItem href="#">Sub-link 2</HeaderMenuItem>
                  <HeaderMenuItem href="#">Sub-link 3</HeaderMenuItem>
                </HeaderMenu>
              </HeaderSideNavItems>
            </SideNavItems>
          </SideNav>
          <HeaderGlobalBar>
            <HeaderGlobalAction aria-label="Notifications">
              <Notification20 />
            </HeaderGlobalAction>
            <HeaderGlobalAction aria-label="User Avatar">
              <UserAvatar20 />
            </HeaderGlobalAction>
            <HeaderGlobalAction aria-label="App Switcher">
              <AppSwitcher20 />
            </HeaderGlobalAction>
          </HeaderGlobalBar>
        </Header>
      </>
    )}
        }/>
);
export default TutorialHeader;

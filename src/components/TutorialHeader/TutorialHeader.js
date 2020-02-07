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
  SideNavMenu, 
  SideNavMenuItem, 
  SideNavLink
} from "carbon-components-react/lib/components/UIShell";
import { Link } from 'react-router-dom';

const TutorialHeader = () => (
  /*
  <div className="container">
    <HeaderContainer
      render={({ isSideNavExpanded, onClickSideNavExpand }) => (
        <>
          <Header aria-label="IBM Platform Name">
            <SkipToContent />
            <HeaderMenuButton
              aria-label="Open menu"
              onClick={onClickSideNavExpand}
              isActive={isSideNavExpanded}
            />
            <HeaderName href="#" prefix="IBM">
              [Platform]
            </HeaderName>
            <HeaderNavigation aria-label="Natural Dissociation">
            <HeaderMenuItem href="/overview">Playlists</HeaderMenuItem>
            <HeaderMenuItem href="https://www.last.fm/de/user/SpaceUlysses" target="_blank">Last.fm</HeaderMenuItem>
            <HeaderMenu aria-label="Finished" menuLinkName="Finished">
              <HeaderMenuItem element={Link} to="#">Playlist 1</HeaderMenuItem>
              <HeaderMenuItem element={Link} to="#">Playlist 2</HeaderMenuItem>
              <HeaderMenuItem element={Link} to="#">Playlist 3</HeaderMenuItem>
            </HeaderMenu>
          </HeaderNavigation>
            <HeaderGlobalBar>
              <HeaderGlobalAction aria-label="Search" onClick={() => {}}>
                <UserAvatar20 />
              </HeaderGlobalAction>
              <HeaderGlobalAction aria-label="Notifications" onClick={() => {}}>
                <Notification20 />
              </HeaderGlobalAction>
              <HeaderGlobalAction aria-label="App Switcher" onClick={() => {}}>
                <AppSwitcher20 />
              </HeaderGlobalAction>
            </HeaderGlobalBar>
            <SideNav aria-label="Side navigation" expanded={isSideNavExpanded}>
              <SideNavItems>
                <SideNavMenu title="Category title">
                  <SideNavMenuItem href="javascript:void(0)">
                    Link
                  </SideNavMenuItem>
                  <SideNavMenuItem
                    aria-current="page"
                    href="javascript:void(0)"
                  >
                    Link
                  </SideNavMenuItem>
                  <SideNavMenuItem href="javascript:void(0)">
                    Link
                  </SideNavMenuItem>
                </SideNavMenu>
                <SideNavMenu title="Category title">
                  <SideNavMenuItem href="javascript:void(0)">
                    Link
                  </SideNavMenuItem>
                  <SideNavMenuItem
                    aria-current="page"
                    href="javascript:void(0)"
                  >
                    Link
                  </SideNavMenuItem>
                  <SideNavMenuItem href="javascript:void(0)">
                    Link
                  </SideNavMenuItem>
                </SideNavMenu>
                <SideNavMenu title="Category title">
                  <SideNavMenuItem href="javascript:void(0)">
                    Link
                  </SideNavMenuItem>
                  <SideNavMenuItem
                    aria-current="page"
                    href="javascript:void(0)"
                  >
                    Link
                  </SideNavMenuItem>
                  <SideNavMenuItem href="javascript:void(0)">
                    Link
                  </SideNavMenuItem>
                </SideNavMenu>
                <SideNavLink href="javascript:void(0)">
                  Link
                </SideNavLink>
                <SideNavLink href="javascript:void(0)">
                  Link
                </SideNavLink>
              </SideNavItems>
            </SideNav>
          </Header>
        </>
      )}
    />
  </div>
  */
  
  
  
  
  
  
  
  
  
  
  
  //CODE FÜR FLEXIBLE SIDENAV
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
          //onClick={
          //  isSideNavExpanded === true ? onClickSideNavExpand : null
          //}
          >
          <SkipToContent />
          <HeaderMenuButton
            aria-label="Open menu"
            onClick={onClickSideNavExpand}
            isActive={isSideNavExpanded}
            //isPersistent={true}
            //hidden={false}
            //disabled={false}  
            display
          />
          <HeaderName href="/" prefix="Natural">
            Dissociation
        </HeaderName>
          <HeaderNavigation aria-label="Natural Dissociation">
            <HeaderMenuItem href="https://www.last.fm/de/user/SpaceUlysses" target="_blank">Last.fm</HeaderMenuItem>
            <HeaderMenuItem href="/overview">Overview</HeaderMenuItem>
            <HeaderMenu aria-label="Finished" menuLinkName="Finished">
              <HeaderMenuItem element={Link} to="#">Playlist 1</HeaderMenuItem>
              <HeaderMenuItem element={Link} to="#">Playlist 2</HeaderMenuItem>
              <HeaderMenuItem element={Link} to="#">Playlist 3</HeaderMenuItem>
            </HeaderMenu>
          </HeaderNavigation>
          <SideNav
            aria-label="Side navigation"
            expanded={isSideNavExpanded}
            isPersistent={false}
            isChildOfHeader={true}>
            <SideNavItems>
              <HeaderSideNavItems>
                <HeaderMenuItem href="https://www.last.fm/de/user/SpaceUlysses" target="_blank">
                  Last.fm
              </HeaderMenuItem>
              <HeaderMenuItem href="/overview">
                  Overview
              </HeaderMenuItem>
                <HeaderMenu
                  aria-label="Finished"
                  menuLinkName="Finished">
                  <HeaderMenuItem element={Link} to="#">Playlist 1</HeaderMenuItem>
                  <HeaderMenuItem element={Link} to="#">Playlist 2</HeaderMenuItem>
                  <HeaderMenuItem element={Link} to="#">Playlist 3</HeaderMenuItem>
                </HeaderMenu>
              </HeaderSideNavItems>

              <SideNavMenu title="L0 menu 1">
            <SideNavMenuItem href="javascript:void(0)">
              L0 menu item 1
            </SideNavMenuItem>
            <SideNavMenuItem href="javascript:void(0)">
              L0 menu item 2
            </SideNavMenuItem>
            <SideNavMenuItem href="javascript:void(0)">
              L0 menu item 3
            </SideNavMenuItem>
          </SideNavMenu>

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

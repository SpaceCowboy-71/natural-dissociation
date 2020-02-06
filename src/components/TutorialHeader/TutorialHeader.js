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
          /*onClick={
            isSideNavExpanded === true ? onClickSideNavExpand : null
          }*/>
          <SkipToContent />
          <HeaderMenuButton
            aria-label="Open menu"
            onClick={onClickSideNavExpand}
            isActive={isSideNavExpanded}
          />
          <HeaderName href="/" prefix="Natural">
            Dissociation
        </HeaderName>
          <HeaderNavigation aria-label="Natural Dissociation">
            <HeaderMenuItem href="/playlists">Playlists</HeaderMenuItem>
            <HeaderMenuItem href="https://www.last.fm/de/user/SpaceUlysses" target="_blank">Last.fm</HeaderMenuItem>
            <HeaderMenu aria-label="Finished" menuLinkName="Finished">
              <HeaderMenuItem element={Link} to="#">Playlist 1</HeaderMenuItem>
              <HeaderMenuItem element={Link} to="#">Playlist 2</HeaderMenuItem>
              <HeaderMenuItem element={Link} to="#">Playlist 3</HeaderMenuItem>
            </HeaderMenu>
          </HeaderNavigation>
          <SideNav
            aria-label="Side navigation"
            expanded={isSideNavExpanded}
            isPersistent={false}>
            <SideNavItems>
              <HeaderSideNavItems>
                <HeaderMenuItem href="/playlists">
                  Playlists
              </HeaderMenuItem>
                <HeaderMenuItem href="https://www.last.fm/de/user/SpaceUlysses" target="_blank">
                  Last.fm
              </HeaderMenuItem>
                <HeaderMenu
                  aria-label="Finished"
                  menuLinkName="Finished">
                  <HeaderMenuItem element={Link} to="#">Playlist 1</HeaderMenuItem>
                  <HeaderMenuItem element={Link} to="#">Playlist 2</HeaderMenuItem>
                  <HeaderMenuItem element={Link} to="#">Playlist 3</HeaderMenuItem>
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

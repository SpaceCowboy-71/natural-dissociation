import React, { useState, useEffect, useCallback } from "react";
import AppSwitcher20 from "@carbon/icons-react/lib/app-switcher/20";
import Information20 from "@carbon/icons-react/lib/information/20";
import UserAvatar20 from "@carbon/icons-react/lib/user--avatar/20";
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
  HeaderSideNavItems
} from "carbon-components-react/lib/components/UIShell";
import { Modal } from "carbon-components-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SideNavPlaylistMenu from "./SideNavPlaylistMenu";

const MainHeader = () => {
  return (
    <>
      <HeaderContainer
        render={({ isSideNavExpanded, onClickSideNavExpand }) => {
          window.addEventListener(
            "resize",
            () => {
              const viewportWidth =
                window.innerWidth || document.documentElement.clientWidth;
              if (viewportWidth > 1056) {
                if (isSideNavExpanded === true) onClickSideNavExpand();
              }
            },
            false
          );

          let headerReturnOverlay;
          if (isSideNavExpanded) {
            headerReturnOverlay = 
              <div
                className="header-return-overlay--active"
                onClick={
                  isSideNavExpanded === true ? onClickSideNavExpand : null
                }
              />
            ;
          } else {
            headerReturnOverlay = <div className="header-return-overlay--inactive" />;
          }

          return (
            <>
              <Header
                aria-label="IBM Platform Name"
                //onClick={
                //  isSideNavExpanded === true ? onClickSideNavExpand : null
                //}
              >
                {headerReturnOverlay}
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
                  <HeaderMenuItem
                    href="https://www.last.fm/de/user/SpaceUlysses"
                    target="_blank"
                  >
                    Last.fm
                  </HeaderMenuItem>
                  <HeaderMenuItem href="https://open.spotify.com/user/pzq94upt8yfrd6pqsjn9drtr0?si=UMalZ7VtQ-Gkok4sZtoW1A">
                    Spotify
                  </HeaderMenuItem>
                  <HeaderMenuItem href="/overview">Overview</HeaderMenuItem>
                  {/*                  <HeaderMenu aria-label="TestMenu" menuLinkName="TestMenu">
                    <HeaderMenuItem element={Link} to="#">
                      Test 2
                    </HeaderMenuItem>
                    <HeaderMenuItem element={Link} to="#">
                      Test 2
                    </HeaderMenuItem>
                    <HeaderMenuItem element={Link} to="#">
                      Test 3
                    </HeaderMenuItem> 
                  </HeaderMenu>*/}
                </HeaderNavigation>
                <SideNav
                  aria-label="Side navigation"
                  expanded={isSideNavExpanded}
                  isChildOfHeader={true}
                  isPersistent={true}
                  isFixedNav={false} //true -> no hover-expand but no animation
                >
                  <SideNavItems>
                    <HeaderSideNavItems>
                      <HeaderMenuItem
                        href="https://www.last.fm/de/user/SpaceUlysses"
                        target="_blank"
                      >
                        Last.fm
                      </HeaderMenuItem>
                      <HeaderMenuItem href="https://open.spotify.com/user/pzq94upt8yfrd6pqsjn9drtr0?si=UMalZ7VtQ-Gkok4sZtoW1A">
                        Spotify
                      </HeaderMenuItem>
                      <HeaderMenuItem href="/overview">Overview</HeaderMenuItem>
                      {/*                  <HeaderMenu aria-label="TestMenu" menuLinkName="TestMenu">
                    <HeaderMenuItem element={Link} to="#">
                      Test 2
                    </HeaderMenuItem>
                    <HeaderMenuItem element={Link} to="#">
                      Test 2
                    </HeaderMenuItem>
                    <HeaderMenuItem element={Link} to="#">
                      Test 3
                    </HeaderMenuItem> 
                  </HeaderMenu>*/}
                    </HeaderSideNavItems>

                    <SideNavPlaylistMenu />
                  </SideNavItems>
                </SideNav>
                <HeaderGlobalBar>
                  <EnhancedInformationHeaderGlobalAction />
                  <HeaderGlobalAction aria-label="User Avatar">
                    <UserAvatar20 />
                  </HeaderGlobalAction>
                  <HeaderGlobalAction aria-label="App Switcher">
                    <AppSwitcher20 />
                  </HeaderGlobalAction>
                </HeaderGlobalBar>
              </Header>
            </>
          );
        }}
      />
    </>
  );
};

const EnhancedInformationHeaderGlobalAction = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = useCallback(() => setIsModalOpen(!isModalOpen), [
    setIsModalOpen,
    isModalOpen
  ]);
  const closeModal = useCallback(() => setIsModalOpen(!isModalOpen), [
    setIsModalOpen,
    isModalOpen
  ]);

  const { t } = useTranslation();
  return (
    <>
      <HeaderGlobalAction aria-label="Information" onClick={openModal}>
        <Information20 />
      </HeaderGlobalAction>
      <Modal
        modalLabel="About"
        modalHeading="Natural Dissociation"
        id="modal1"
        aria-label="modal1"
        open={isModalOpen}
        onRequestClose={closeModal}
        passiveModal
      >
        <p className={`bx--modal-content__text`}>
          <br />
          <br />
          {t("Version Number")}
          <br />
          <br />
          {t("Copyright")}
          <br />
          <br />
          Made utilizing the{" "}
          <a href="https://www.carbondesignsystem.com/">
            Carbon Design System{" "}
          </a>
          <br />
          <br />
          {t("Last updated on")}
        </p>
      </Modal>
    </>
  );
};

export default MainHeader;

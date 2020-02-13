import React, { useState, useCallback } from "react";
import AppSwitcher20 from "@carbon/icons-react/lib/app-switcher/20";
import Information20 from "@carbon/icons-react/lib/information/20";
import Launch16 from "@carbon/icons-react/lib/launch/16";
import {
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderGlobalAction,
  HeaderGlobalBar,
  HeaderMenuButton,
  HeaderContainer,
  SideNav,
  SideNavItems,
  HeaderSideNavItems
} from "carbon-components-react/lib/components/UIShell";
import { Modal } from "carbon-components-react";
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
            headerReturnOverlay = (
              <div
                className="header-return-overlay--active"
                onClick={
                  isSideNavExpanded === true ? onClickSideNavExpand : null
                }
              />
            );
          } else {
            headerReturnOverlay = (
              <div className="header-return-overlay--inactive" />
            );
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
                <HeaderMenuButton
                  aria-label="Open menu"
                  onClick={onClickSideNavExpand}
                  isActive={isSideNavExpanded}
                />
                <HeaderName href="/" prefix="Natural">
                  Dissociation
                </HeaderName>
                <HeaderNavigation aria-label="Natural Dissociation">
                  <HeaderMenuItem href="https://www.last.fm/de/user/SpaceUlysses">
                    Last.fm
                    <Launch16 className="header-icon__external" />
                  </HeaderMenuItem>
                  <HeaderMenuItem href="https://open.spotify.com/user/pzq94upt8yfrd6pqsjn9drtr0?si=UMalZ7VtQ-Gkok4sZtoW1A">
                    Spotify
                    <Launch16 className="header-icon__external" />
                  </HeaderMenuItem>
                  <HeaderMenuItem href="/overview">Overview</HeaderMenuItem>
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
                      <HeaderMenuItem href="https://www.last.fm/de/user/SpaceUlysses">
                        Last.fm
                        <Launch16 className="header-icon__external" />
                      </HeaderMenuItem>
                      <HeaderMenuItem href="https://open.spotify.com/user/pzq94upt8yfrd6pqsjn9drtr0?si=UMalZ7VtQ-Gkok4sZtoW1A">
                        Spotify
                        <Launch16
                          className="header-icon__external"
                          style={{
                            fill: "#f4f4f4",
                            width: "12px",
                            padding: "2px"
                          }}
                        />
                      </HeaderMenuItem>
                      <HeaderMenuItem href="/overview">Overview</HeaderMenuItem>
                      <hr className="side-nav__divider"></hr>
                    </HeaderSideNavItems>
                    <SideNavPlaylistMenu />
                  </SideNavItems>
                </SideNav>

                <HeaderGlobalBar>
                  <EnhancedInformationHeaderGlobalAction />
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
          <a href="mailto:natural.dissociation@gmail.com">
            natural.dissociation@gmail.com
          </a>
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

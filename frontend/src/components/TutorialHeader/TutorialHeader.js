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
  HeaderSideNavItems,
  SideNavMenu,
  SideNavMenuItem,
} from "carbon-components-react/lib/components/UIShell";
import { Modal } from "carbon-components-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const TutorialHeader = () => {
  const { t } = useTranslation();
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
          return (
            <>
              <Header
                aria-label="IBM Platform Name"
                //onClick={
                //  isSideNavExpanded === true ? onClickSideNavExpand : null
                //}
              >
                <SkipToContent />
                <HeaderMenuButton
                  aria-label="Open menu"
                  onClick={onClickSideNavExpand}
                  isActive={isSideNavExpanded}
                />
                <HeaderName href="/" prefix="Natural">
                  {t("Hello World")}
                </HeaderName>
                <HeaderNavigation aria-label="Natural Dissociation">
                  <HeaderMenuItem
                    href="https://www.last.fm/de/user/SpaceUlysses"
                    target="_blank"
                  >
                    Last.fm
                  </HeaderMenuItem>
                  <HeaderMenuItem href="/overview">Overview</HeaderMenuItem>
                  <HeaderMenu aria-label="Finished" menuLinkName="Finished">
                    <HeaderMenuItem element={Link} to="#">
                      Playlist 1
                    </HeaderMenuItem>
                    <HeaderMenuItem element={Link} to="#">
                      Playlist 2
                    </HeaderMenuItem>
                    <HeaderMenuItem element={Link} to="#">
                      Playlist 3
                    </HeaderMenuItem>
                  </HeaderMenu>
                </HeaderNavigation>
                <SideNav
                  aria-label="Side navigation"
                  expanded={isSideNavExpanded}
                  isPersistent={false}
                  isChildOfHeader={true}
                >
                  <SideNavItems>
                    <HeaderSideNavItems>
                      <HeaderMenuItem
                        href="https://www.last.fm/de/user/SpaceUlysses"
                        target="_blank"
                      >
                        Last.fm
                      </HeaderMenuItem>
                      <HeaderMenuItem href="/overview">Overview</HeaderMenuItem>
                      <HeaderMenu aria-label="Finished" menuLinkName="Finished">
                        <HeaderMenuItem element={Link} to="#">
                          Playlist 1
                        </HeaderMenuItem>
                        <HeaderMenuItem element={Link} to="#">
                          Playlist 2
                        </HeaderMenuItem>
                        <HeaderMenuItem element={Link} to="#">
                          Playlist 3
                        </HeaderMenuItem>
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

  return (
    <>
      <HeaderGlobalAction aria-label="Information" onClick={openModal}>
        <Information20 />
      </HeaderGlobalAction>
      <Modal
        id="modal1"
        aria-label="modal1"
        open={isModalOpen}
        onRequestClose={closeModal}
        passiveModal
      >
        <p className={`bx--modal-content__text`}>
          <br />
          <br />
          Version 0.1.0
          <br />
          <br />
          Copyright B.Bärenstark 2020
        </p>
      </Modal>
    </>
  );
};

export default TutorialHeader;

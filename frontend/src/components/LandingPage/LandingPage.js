import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Tabs,
  Tab,
  ListItem,
  UnorderedList
} from "carbon-components-react";
import logo from "./tab-illo.png";
import LL from "./LL.svg";
import { useTranslation } from "react-i18next";

const props = {
  tabs: {
    selected: 0,
    triggerHref: "#",
    role: "navigation"
  },
  tab: {
    href: "#",
    role: "presentation",
    tabIndex: 0
  }
};

const LandingPage = () => {
  const { t } = useTranslation();
  return (
    <div className="bx--grid bx--grid--full-width landing-page bx--no-gutter">
      <div className="bx--row landing-page__banner">
        <div className="bx--col-lg-16">
          <Breadcrumb noTrailingSlash aria-label="Page navigation">
            <BreadcrumbItem>
              <a href="/">{t("Stay a while")}</a>
            </BreadcrumbItem>
          </Breadcrumb>
          <h1 className="landing-page__heading">
            Make yourself comfortable, Hacker.
          </h1>
        </div>
      </div>
      <div className="bx--row landing-page__r2">
        <div className="bx--col bx--no-gutter">
          <Tabs {...props.tabs} aria-label="Tab navigation">
            <Tab {...props.tab} label="The Website">
              <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
                <div className="bx--row landing-page__tab-content">
                  <div className="bx--col-md-4 bx--col-lg-7">
                    <h2 className="landing-page__subheading">
                      What is Carbon?
                    </h2>
                    <p className="landing-page__p">
                      Carbon is IBM’s open-source design system for digital
                      products and experiences. With the IBM Design Language as
                      its foundation, the system consists of working code,
                      design tools and resources, human interface guidelines,
                      and a vibrant community of contributors.
                    </p>
                    <Button>Learn more</Button>
                  </div>
                  <div className="bx--col-md-4 bx--offset-lg-1 bx--col-lg-8">
                    <img
                      className="landing-page__illo"
                      src={logo}
                      alt="Carbon Illustration"
                    />
                  </div>
                </div>
              </div>
            </Tab>
            <Tab {...props.tab} label="The Playlists">
              <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
                <div className="bx--row landing-page__tab-content">
                  <div className="bx--col-lg-10 bx--col-md-6 ">
                    <h2 className="landing-page__subheading">
                      The playlists presented on this site are split into three
                      categories:
                    </h2>
                    <UnorderedList className="landing-page-list">
                      <ListItem className="landing-page-list__item">
                        <strong>{"Collections: "}</strong>Malis bonorum ut ius.
                        In vel offendit inimicus expetendis, signiferumque
                        vituperatoribus id vis, est modo ubique te. Nonumes
                        omittantur voluptatibus.
                      </ListItem>
                      <ListItem className="landing-page-list__item">
                        <strong>{"Finished playlists: "}</strong>Lorem ipsum
                        dolor sit amet, has ex maiorum propriae scaevola. Duo eu
                        placerat mediocrem, ad mea consul fabellas legendos ne.
                      </ListItem>
                      <ListItem className="landing-page-list__item">
                        <strong>{"WIP-playlists: "}</strong>Virtute vulputate
                        his an, ut assum epicuri mei. Dico eligendi ullamcorper
                        ea duo. Erat saepe erroribus in sit, ex eius.
                      </ListItem>
                    </UnorderedList>
                  </div>
                </div>
              </div>
            </Tab>
            <Tab {...props.tab} label="The Name">
              <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
                <div className="bx--row landing-page__tab-content">
                  <div className="bx--col-lg-8 bx--col-md-6">
                    <h2 className="landing-page__subheading">
                      / Natural / Dissociation /
                    </h2>
                    <p className="landing-page__p">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                      accusam et justo duo dolores et ea rebum. Stet clita kasd
                      gubergren, no sea takimata sanctus est Lorem ipsum dolor
                      sit amet. Lorem ipsum dolor sit amet, consetetur
                      sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                      ut labore et dolore magna aliquyam erat, sed diam
                      voluptua. At vero eos et accusam et justo duo dolores et
                      ea rebum. Stet clita kasd gubergren, no sea takimata
                      sanctus est Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
      <div className="bx--row landing-page__r3">
        <img className="LL" src={LL} alt="Carbon Illustration" />
        {/* <div className="bx--col-md-4 bx--col-lg-4">
          <h3 className="landing-page__label">The Principles</h3>
        </div>
        <div className="bx--col-md-4 bx--col-lg-4">Carbon is Open</div>
        <div className="bx--col-md-4 bx--col-lg-4">Carbon is Modular</div>
        <div className="bx--col-md-4 bx--col-lg-4">Carbon is Consistent</div> */}
      </div>
    </div>
  );
};

export default LandingPage;

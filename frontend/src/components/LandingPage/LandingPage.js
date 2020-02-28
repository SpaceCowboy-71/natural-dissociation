import React from "react";
import { Breadcrumb, BreadcrumbItem, Button, Tabs, Tab, ListItem, UnorderedList } from "carbon-components-react";
import logo from "./Images/tab-illo.png";
import WaveformLLLarge from "./Images/LL.svg";
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
          <h1 className="landing-page__heading">Make yourself comfortable, Hacker.</h1>
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
                      What is <em>Natural Dissociation</em>?
                    </h2>
                    <p className="landing-page__p">
                      On this website I'm presenting my well-curated Spotify playlists of different sizes, formats and styles.
                      <br /> Select the "Playlists" tab to find out more about the classification system or straightaway pick one
                      of the playlists presented in the menu to get additional information about it. Alternatively you can view
                      them in the overview table and sort by category or genre, or even search for certain keywords. <br />
                      Have fun listening!
                    </p>
                    <Button href="/overview">Take the Plunge</Button>
                  </div>
                  <div className="bx--col-md-4 bx--offset-lg-1 bx--col-lg-8">
                    <img className="landing-page__illo" src={logo} alt="Carbon Illustration" />
                  </div>
                </div>
              </div>
            </Tab>
            <Tab {...props.tab} label="The Playlists">
              <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
                <div className="bx--row landing-page__tab-content">
                  <div className="bx--col-lg-10 bx--col-md-6 ">
                    <h2 className="landing-page__subheading">
                      The playlists presented on this site are split into three categories:
                    </h2>
                    <UnorderedList className="landing-page-list">
                      <ListItem className="landing-page-list__item">
                        <strong>{"Anthologies: "}</strong>Compilations of works of the same or very similar artists, these
                        completed playlists are following a distinct idea and are meant to be played in the listed order.
                      </ListItem>
                      <ListItem className="landing-page-list__item">
                        <strong>{"Collections: "}</strong>Ever-growing playlists that are only loosely following a common theme.
                        As they are subject to changes and neither have a beginning nor an end, Shuffle is the best way of
                        listening to them.
                      </ListItem>
                      <ListItem className="landing-page-list__item">
                        <strong>{"Finished playlists: "}</strong>Self-contained selections of about the length of an album, they
                        are built around certain emotions, thoughts or motifs and are less about genres.
                      </ListItem>
                    </UnorderedList>
                  </div>
                </div>
              </div>
            </Tab>
            <Tab {...props.tab} label="The Name">
              <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
                <div className="bx--row landing-page__tab-content">
                  <div className="bx--col-lg-9 bx--col-md-6">
                    <h2 className="landing-page__subheading">/ Natural / Dissociation /</h2>
                    <p className="landing-page__p">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                      dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
                      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. <br /> Lorem ipsum dolor sit
                      amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                      erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                      no sea takimata sanctus est Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
      <div className="bx--row landing-page__r3">
        <img className="landing-page__waveform" src={WaveformLLLarge} alt="Carbon Illustration" />
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

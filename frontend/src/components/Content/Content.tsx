//
// Content.tsx
//
//
// Created by Thomas Schönmann on 08.02.2020
// Copyright © 2020. All rights reserved.
//
//
//

import React from "react";
import { Content } from "carbon-components-react/lib/components/UIShell";
import { Route, Switch } from "react-router-dom";
import LandingPage from "../LandingPage";
import OverviewPage from "../OverviewPage";
import FetchContainer from "../SpotifyPlaylistInfo/FetchContainer";
import SpotifyPlaylistInfo from "../SpotifyPlaylistInfo/SpotifyPlaylistInfo";

/*
 *
 * Components.
 *
 */

export default () => {
  return (
    <Content className="bx--content__master">
      <Switch>
        <Route exact path="/">
          <Content>
            <LandingPage />
          </Content>
        </Route>
        <Route exact path="/overview">
          <Content>
            <OverviewPage />
          </Content>
        </Route>
        <Route exact path="/spotify/:id">
          <SpotifyPlaylistInfo />
        </Route>
      </Switch>
    </Content>
  );
};

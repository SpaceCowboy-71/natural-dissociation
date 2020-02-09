//
// Content.tsx
//
//
// Created by Thomas Schönmann on 08.02.2020
// Copyright © 2020. All rights reserved.
//
//
//

import React, {  } from "react";
import { Content } from "carbon-components-react/lib/components/UIShell";
import { Route, Switch } from "react-router-dom";
import LandingPage from "../LandingPage";
import OverviewPage from "../OverviewPage";
import FetchContainer from "../SpotifyPlaylistInfo/FetchContainer";
import SpotifyPlaylistInfo from "../SpotifyPlaylistInfo/SpotifyPlaylistInfo"

/*
 *
 * Components.
 *
 */

export default () => {
  return (
    <Content>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/overview" component={OverviewPage} />
        <Route path="/spotify" component={SpotifyPlaylistInfo} />
      </Switch>
    </Content>
  );
};
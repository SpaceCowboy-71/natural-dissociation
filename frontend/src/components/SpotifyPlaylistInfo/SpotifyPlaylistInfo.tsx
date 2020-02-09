//
// SpotifyPlaylistInfo.tsx
//
//
// Created by Thomas Schönmann on 08.02.2020
// Copyright © 2020 expressFlow GmbH. All rights reserved.
//
//
//

import React, { memo, ReactNode } from "react";
import { SpotifyPlaylistMetadata } from "../../model/data.types";
import { useLocation } from "react-router-dom";

/*
 *
 * Interfaces.
 *
 */

interface SpotifyPlaylistInfoProps {}

/*
 *
 * Components.
 *
 */

export default function<SpotifyPlaylistInfoProps>(props) {
  const location = useLocation();

  // @ts-ignore
  const playlist: SpotifyPlaylistMetadata = location.state.playlist as SpotifyPlaylistMetadata;

  // console.warn("playlist:", playlist);

  return <div>{JSON.stringify(playlist)}</div>;
}

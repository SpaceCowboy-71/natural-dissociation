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
import { useParams } from "react-router-dom";
import { useSingleSpotifyPlaylist } from "../../hooks/db";

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
  const urlParams = useParams<{ id: string }>();
  const playlist = useSingleSpotifyPlaylist(urlParams.id);

  console.warn("playlist:", playlist);

  return <div>{JSON.stringify(playlist)}</div>;
}

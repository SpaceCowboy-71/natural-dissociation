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
import Image from "./test.jpg";

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

  return (
    <>
      <div className="bx--grid bx--grid--full-width playlist-info-page bx--no-gutter">
        <div className="bx--row playlist-info-page__banner bx--no-gutter">
          <div className="bx--col-lg-16 bx-.bx--no-gutter--right">
            <img src={Image} className="playlist-image" />
          </div>
        </div>

        <div className="bx--row playlist-info-page__body">
          <div className="bx--col-md-4 bx--offset-lg-3 bx--col-lg-5">
            <h2 className="playlist-info-page__heading">
              Carbon Design System
            </h2>
            <br />
          </div>
          <div className="bx--col-md-4  bx--col-lg-8">
            <p className="playlist-info-page__p">
              Carbon is IBM’s open-source design system for products and
              experiences. With the IBM Design Language as its foundation, the
              system consists of working code, design tools and resources, human
              interface guidelines, and a vibrant community of contributors.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

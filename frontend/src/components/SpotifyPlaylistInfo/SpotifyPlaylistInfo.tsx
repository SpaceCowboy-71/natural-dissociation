//
// SpotifyPlaylistInfo.tsx
//
//
// Created by Thomas Schönmann on 08.02.2020
// Copyright © 2020 expressFlow GmbH. All rights reserved.
//
//
//
import React from "react";
import { ClickableTile } from "carbon-components-react";
import ArrowRight20 from "@carbon/icons-react/lib/arrow--right/20";
import { useParams } from "react-router-dom";
import {
  useSingleSpotifyPlaylist,
  usePlaylistImageGetDownloadUrl
} from "../../hooks/db";

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
  const media = usePlaylistImageGetDownloadUrl(urlParams.id);
  console.warn("media: " + media);

  return (
    <>
      <div className="bx--grid bx--grid--full-width playlist-info-page bx--no-gutter">
        <span className="playlist-info-page__dots" />
        <span className="playlist-info-page__filter" />
        <div className="bx--row playlist-info-page__banner bx--no-gutter">
          <div className="bx--col-lg-16 bx-.bx--no-gutter--right">
            <img className="playlist-image" src={media} />
            <div className="playlist-tile-container bx--col-lg-4 bx--offset-lg-9 bx--col-md-3 bx--offset-md-4 bx--col-sm-2 bx--offset-sm-2">
              <ClickableTile
                className="playlist-tile-spotify"
                href={playlist?.spotify.playlistUrl}
              >
                <h5 className="playlist-tile-spotify-subtitle">Spotify</h5>
                <h4 className="playlist-tile-spotify-title">Go to Playlist</h4>
                <ArrowRight20 className="playlist-tile-spotify-icon" />
              </ClickableTile>
            </div>
          </div>
        </div>
        <div className="bx--row playlist-info-page__body">
          <div className="bx--col-md-4 bx--offset-lg-3 bx--col-lg-5">
            <h2 className="playlist-info-page__heading">{playlist?.title}</h2>
            <br />
          </div>
          <div className="bx--col-md-4  bx--col-lg-8">
            <p className="playlist-info-page__p">{playlist?.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}

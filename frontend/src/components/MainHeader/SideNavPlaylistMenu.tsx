import React, { useState, useEffect } from "react";
import {
  SideNavMenu,
  SideNavMenuItem
} from "carbon-components-react/lib/components/UIShell";
import { useAllSpotifyPlaylists } from "../../hooks/db";
import { useHistory } from "react-router-dom";

export default function() {
  const playlists = useAllSpotifyPlaylists();
  const history = useHistory();

  return (
    <>
      <SideNavMenu title="Collections">
        {playlists
          .filter(playlist => playlist.category === "collection")
          .map(playlist => {
            return (
              <SideNavMenuItem
                key={playlist.id}
                href={"/spotify/" + playlist.id}
              >
                {playlist.title}
              </SideNavMenuItem>
            );
          })}
      </SideNavMenu>
      <SideNavMenu title="Finished Playlists">
        {playlists
          .filter(playlist => playlist.category === "finished")
          .map(playlist => {
            return (
              <SideNavMenuItem
                key={playlist.id}
                href={"/spotify/" + playlist.id}
              >
                {playlist.title}
              </SideNavMenuItem>
            );
          })}
      </SideNavMenu>
    </>
  );
}

/* export default function() {
  const playlists = useAllSpotifyPlaylists();
  const history = useHistory();

  return (
    <SideNavMenu title="Finished">
      {playlists.map(playlist => {
        return (
          <SideNavMenuItem key={playlist.id} href={"/spotify/" + playlist.id}>
            {playlist.title}
          </SideNavMenuItem>
        );
      })}
    </SideNavMenu>
  );
} */
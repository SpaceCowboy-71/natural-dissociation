import React, { useState, useEffect } from "react";
import {
  SideNavMenu,
  SideNavMenuItem
} from "carbon-components-react/lib/components/UIShell";
import { SpotifyPlaylistMetadata } from "../../model/data.types";
import { getAllSpotifyPlaylists } from "../../model/db";
import { useHistory } from "react-router-dom";

export default function() {
  const playlists = useAllSpotifyPlaylists();
  const history = useHistory();

  return (
    <SideNavMenu title="L0 menu 1">
      {playlists.map(playlist => {
        return (
          <SideNavMenuItem
            onClick={() => {
              history.push({
                pathname: "/spotify",
                state: { playlist }
              });
            }}
          >
            {playlist.title}
          </SideNavMenuItem>
        );
      })}
    </SideNavMenu>
  );

  /*
  return (
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
  );
  */
}

/**
 * Fetch all playlists for spotify and return them directly. Returns
 * empty array if no playlists are found or not fetched yet.
 */
function useAllSpotifyPlaylists() {
  const [playlists, setPlaylists] = useState<SpotifyPlaylistMetadata[]>([]);

  useEffect(() => {
    getAllSpotifyPlaylists().then(playlists => {
      setPlaylists(playlists);
    });
  }, [setPlaylists]);

  return playlists;
}

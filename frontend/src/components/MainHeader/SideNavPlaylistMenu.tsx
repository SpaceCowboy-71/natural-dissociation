import React from "react";
import {
  SideNavMenu,
  SideNavMenuItem
} from "carbon-components-react/lib/components/UIShell";
import { useAllSpotifyPlaylists } from "../../hooks/db";

export default function() {
  const playlists = useAllSpotifyPlaylists();

  return (
    <>
      <SideNavMenu title="Collections" defaultExpanded={true} >
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
      <SideNavMenu title="Finished Playlists" defaultExpanded={true} >
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

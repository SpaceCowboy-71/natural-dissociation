import { useState, useEffect } from "react";
import { SpotifyPlaylistMetadata } from "../model/data.types";
import { getSingleSpotifyPlaylist } from "../model/db";

/**
 * Hook to get a single spotify playlist. Returns undefined as
 * long as not fetch has succeeded.
 *
 * @param id
 */
export function useSingleSpotifyPlaylist(id: string) {
  const [playlist, setPlaylist] = useState<SpotifyPlaylistMetadata>();

  useEffect(() => {
    getSingleSpotifyPlaylist(id).then(playlist => {
      setPlaylist(playlist);
    });
  }, [id]);

  return playlist;
}

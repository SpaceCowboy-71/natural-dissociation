import { useState, useEffect } from "react";
import { SpotifyPlaylistMetadata } from "../model/data.types";
import { getSingleSpotifyPlaylist, getAllSpotifyPlaylists } from "../model/db";

/**
 * Fetch all playlists for spotify and return them directly. Returns
 * empty array if no playlists are found or not fetched yet.
 */
export function useAllSpotifyPlaylists() {
  const [playlists, setPlaylists] = useState<SpotifyPlaylistMetadata[]>([]);

  useEffect(() => {
    getAllSpotifyPlaylists().then(playlists => {
      setPlaylists(playlists);
    });
  }, [setPlaylists]);

  return playlists;
}

/**
 * Hook to get a single spotify playlist. Returns undefined as
 * long as not fetch has succeeded.
 *
 * @param id    ID for Firestore-object.
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

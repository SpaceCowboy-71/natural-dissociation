import firebase from "firebase";
import config from "../config.fire.json";
import { SpotifyPlaylistMetadata } from "./playlist.js";

firebase.initializeApp(config);

const firestore = firebase.firestore();

export async function getAllSpotifyPlaylists() {
  const playlistsSnapshot = await firestore
    .collection("playlists-spotify")
    .get();

  if (playlistsSnapshot.empty) {
    return [];
  }

  return playlistsSnapshot.docs.map(doc => {
    return doc.data() as SpotifyPlaylistMetadata;
  });
}

/**
 * Fetch a single SpotifyPlaylistMetadata from the db.
 * @param id 
 */
export async function getSingleSpotifyPlaylist(id: string) {
  const snap = await firestore
    .collection("playlists-spotify")
    .doc(id)
    .get();

  if (snap.exists) {
    return snap.data() as SpotifyPlaylistMetadata;
  }
}

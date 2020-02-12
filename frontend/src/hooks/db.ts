import { useState, useEffect } from "react";
import { SpotifyPlaylistMetadata } from "../model/data.types";
import { getSingleSpotifyPlaylist, getAllSpotifyPlaylists } from "../model/db";
import firebase from "firebase";

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

export function usePlaylistImageGetDownloadUrl(mediaUrl: string) {
  const [imageUrl, setImageUrl] = useState("");
  var storage = firebase.storage();
  var storageRef = storage.ref();
  var imagesRef = storageRef.child("images");
  var spaceRef = imagesRef.child(mediaUrl + ".jpg");

  useEffect(() => {
    spaceRef
      .getDownloadURL()
      .then(function(url) {
        console.warn("Url: " + url);
        setImageUrl(url);
      })
      .catch(function(error) {
        switch (error.code) {
          //doesn't work
          case "storage/invalid-argument":
            return "NASA.jpg";
            default: 
            return "NASA.jpg";
        }
      });
  });

  return imageUrl;
}

/*    
var path = ""; 
var storage = firebase.storage();
var storageRef = storage.ref();
var imagesRef = storageRef.child("images");
var spaceRef = imagesRef.child("NASA.jpg");



spaceRef
  .getDownloadURL()
  .then(function(url) {
    // `url` is the download URL for 'images/NASA.jpg'

    console.warn(url)
    path = url;
    console.warn("path: " + path)
  })
  .catch(function(error) {
    // Handle any errors
  });  */

import firebase from "firebase";
import React from "react";

export async function PlaylistImage (props) {

    var path = "";
    var storage = firebase.storage();
    var storageRef = storage.ref();
    var imagesRef = storageRef.child("images");
    var spaceRef = imagesRef.child(props.mediaUrl);
    
  
    spaceRef
      .getDownloadURL()
      .then(function(url) {
        // `url` is the download URL for 'images/NASA.jpg'
  
        console.warn(url);
        path = url;
        console.warn("path: " + path);
      })
      .catch(function(error) {
        // Handle any errors
      });
  
    return path;
  }
  
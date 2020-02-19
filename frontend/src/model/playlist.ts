export interface SpotifyPlaylistMetadata {
  id: string;
  title: string;
  description: string;
  playlistUrl: string;
  category: string;
  tags: SpotifyPlaylistTag[];
}

//TODO: doesn't work right now (doesn't enforce type)
export enum SpotifyPlaylistTag {
  Disco = "Disco", 
  Summer ="Summer"
}
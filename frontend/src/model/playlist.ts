export interface SpotifyPlaylistMetadata {
  id: string;
  title: string;
  description: string;
  playlistUrl: string;
  category: string;
  tags: SpotifyPlaylistTag[];
}

export enum SpotifyPlaylistTag {
  Disco = "Disco", 
  Summer ="Summer"
}
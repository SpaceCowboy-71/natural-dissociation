export interface SpotifyPlaylistMetadata {
  id: string;
  title: string;
  description: string;
  spotify: {
    playlistUrl: string;
  };
  category: string;
}

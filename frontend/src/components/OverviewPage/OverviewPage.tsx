import React, { useState } from "react";
import PlaylistTable from "./PlaylistTable";
import { useAllSpotifyPlaylists } from "../../hooks/db";
import { Pagination, Link } from "carbon-components-react";
import { SpotifyPlaylistMetadata } from "../../model/playlist";

const headers = [
  {
    key: "title",
    header: "Title"
  },
  {
    key: "playlistUrl",
    header: "Links"
  },
  {
    key: "category",
    header: "Category"
  },
  {
    key: "tags",
    header: "Tags"
  }
];

const OverviewPage = () => {
  //const [totalItems, setTotalItems] = useState(0);

  //setTotalItems(useAllSpotifyPlaylists().length);
  //const rows = useAllSpotifyPlaylists();
  const allPlaylists = useAllSpotifyPlaylists();
  const rows = getRowItems(allPlaylists);
  const totalItems = allPlaylists.length;

  return (
    <div className="bx--grid bx--no-gutter overview-page-main-container">
      <PlaylistTable
        headers={headers}
        rows={rows}
        allPlaylists={allPlaylists}
      />
      
    </div>
  );
};

const LinkList = ({ id, playlistUrl }) => (
  <ul style={{ display: "flex" }}>
    <li>
      <Link href={"/spotify/" + id}>Info</Link>
    </li>
    {playlistUrl && (
      <li>
        <span>&nbsp;|&nbsp;</span>
        <Link href={playlistUrl}>Spotify</Link>
      </li>
    )}
  </ul>
);

const getRowItems = (rows: SpotifyPlaylistMetadata[]) =>
  rows.map(row => ({
    ...row,
    //key: row.id,
    id: row.id,
    title: row.title,
    description: row.description,
    playlistUrl: <LinkList id={row.id} playlistUrl={row.playlistUrl} />,
    category: row.category,
    tags: row.tags.sort().join(", ")
  }));

export default OverviewPage;

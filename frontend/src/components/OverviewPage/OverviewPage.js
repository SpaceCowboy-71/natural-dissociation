import React, { useState } from "react";
import PlaylistTable from "./PlaylistTable.js";
import { useAllSpotifyPlaylists } from "../../hooks/db";
import { Pagination, Link } from "carbon-components-react";

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
  }
];

const OverviewPage = () => {
  //const [totalItems, setTotalItems] = useState(0);
  const [firstRowIndex, setFirstRowIndex] = useState(0);
  const [currentPageSize, setCurrentPageSize] = useState(10);
  //setTotalItems(useAllSpotifyPlaylists().length);
  //const rows = useAllSpotifyPlaylists();
  const rows = getRowItems(useAllSpotifyPlaylists());
  const totalItems = useAllSpotifyPlaylists().length;

  return (
    <div className="bx--grid bx--no-gutter overview-page-main-container">
      <PlaylistTable
        headers={headers}
        rows={rows.slice(firstRowIndex, firstRowIndex + currentPageSize)}
      />
      <Pagination
        className="overview-page-datatable-pagination"
        totalItems={totalItems}
        backwardText="Previous page"
        forwardText="Next page"
        pageSize={currentPageSize}
        pageSizes={[5, 10, 15, 25]}
        itemsPerPageText="Items per page"
        onChange={({ page, pageSize }) => {
          if (pageSize !== currentPageSize) {
            setCurrentPageSize(pageSize);
          }
          setFirstRowIndex(pageSize * (page - 1));
        }}
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

const getRowItems = rows =>
  rows.map(row => ({
    ...row,
    //key: row.id,
    id: row.id,
    title: row.title,
    description: row.description,
    playlistUrl: <LinkList id={row.id} playlistUrl={row.playlistUrl} />,
    category: row.category
  }));

export default OverviewPage;

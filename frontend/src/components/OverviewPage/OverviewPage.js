import React, { useState } from "react";
import PlaylistTable from "./PlaylistTable.js";
import { useAllSpotifyPlaylists } from "../../hooks/db";
import { Pagination } from "carbon-components-react";

const headers = [
  {
    key: "id",
    header: "Name"
  },
  {
    key: "title",
    header: "Created"
  },
  {
    key: "playlistUrl",
    header: "Open Issues"
  },
  {
    key: "category",
    header: "Stars"
  }
];

const OverviewPage = () => {
  //const [totalItems, setTotalItems] = useState(0);
  const [firstRowIndex, setFirstRowIndex] = useState(0);
  const [currentPageSize, setCurrentPageSize] = useState(10);
  //setTotalItems(useAllSpotifyPlaylists().length);
  const rows = useAllSpotifyPlaylists();
  const totalItems = useAllSpotifyPlaylists().length;
  return (
    <div className="bx--grid">
      <div className="bx--row">
        <section className="bx--col-lg-16">
          <PlaylistTable
            headers={headers}
            rows={rows.slice(firstRowIndex, firstRowIndex + currentPageSize)}
          />
          <Pagination
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
        </section>
      </div>
    </div>
  );
};

export default OverviewPage;

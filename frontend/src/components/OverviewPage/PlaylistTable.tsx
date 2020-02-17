import React, { useState, Dispatch, SetStateAction } from "react";
import {
  DataTable,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableExpandHeader,
  TableHeader,
  TableBody,
  TableExpandRow,
  TableCell,
  TableExpandedRow,
  TableToolbar,
  TableToolbarSearch,
  TableToolbarMenu,
  TableToolbarAction,
  Checkbox
} from "carbon-components-react";
import Filter16 from "@carbon/icons-react/lib/filter/16";
import { SpotifyPlaylistMetadata } from "../../model/playlist";

const PlaylistTable = (props: {
  rows: any;
  headers: Array<{
    key: string;
    header: string;
  }>;
  allPlaylists?: SpotifyPlaylistMetadata[];
}) => {
  const [checkedTags, setCheckedTags] = useState<string[]>([]);
  const [checkedCategories, setCheckedCategories] = useState<string[]>([]);
  const { rows, headers, allPlaylists } = props;

  const getRowDescription = (rowId: string) => {
    const row = rows.find(({ id }) => id === rowId);
    return row ? row.description : "";
  };

  if (!allPlaylists) return null;

  return (
    <DataTable
      rows={rows.filter(row => {
        if (checkedCategories.length > 0 && !checkedCategories.includes(row.category)) {
          return false;
        }
        if (
          checkedTags.length > 0 &&
          !checkedTags.every(tag => {
            return row.tags.includes(tag);
          })
        ) {

          //Use !checkedTags.every(...) to filter only if it contains all
          //Use !checkedTags.some(...) to filter if it contains atleast one item
          return false;
        }

        return true;
      })}
      headers={headers}
      render={({ rows, headers, getHeaderProps, getRowProps, getTableProps, onInputChange }) => (
        <TableContainer
          title="Playlist Overview"
          description="Use the search and filter functions to find your favorite playlists"
        >
          <TableToolbar>
            {
              // @ts-ignore
              <TableToolbarSearch placeHolderText="Search table" expanded onChange={onInputChange} />
            }
            <TableToolbarMenu iconDescription="Filter" renderIcon={Filter16}>
              <Checkboxes
                allPlaylists={allPlaylists}
                checkedCategories={checkedCategories}
                setCheckedCategories={setCheckedCategories}
                checkedTags={checkedTags}
                setCheckedTags={setCheckedTags}
              />
            </TableToolbarMenu>
          </TableToolbar>
          <Table {...getTableProps()}>
            <TableHead>
              <TableRow>
                <TableExpandHeader />
                {headers.map(header => (
                  <TableHeader {...getHeaderProps({ header })}>{header.header}</TableHeader>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <React.Fragment key={row.id}>
                  {
                    // @ts-ignore
                    <TableExpandRow {...getRowProps({ row })}>
                      {row.cells.map(cell => (
                        <TableCell key={cell.id}>{cell.value}</TableCell>
                      ))}
                    </TableExpandRow>
                  }
                  <TableExpandedRow colSpan={headers.length + 1}>
                    <p>
                      <p>{getRowDescription(row.id)}</p>
                    </p>
                  </TableExpandedRow>
                </React.Fragment>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    />
  );
};
export default PlaylistTable;

const Checkboxes = (props: {
  allPlaylists: SpotifyPlaylistMetadata[];
  checkedCategories: string[];
  setCheckedCategories: Dispatch<SetStateAction<string[]>>;
  checkedTags: string[];
  setCheckedTags: Dispatch<SetStateAction<string[]>>;
}) => {
  const { allPlaylists, checkedCategories, setCheckedCategories, checkedTags, setCheckedTags } = props;

  const tags = getPlaylistTags(allPlaylists);
  const categories = getPlaylistCategories(allPlaylists);

  return (
    <div style={{ padding: 10 }}>
      <fieldset>
        <legend className="playlist-table-legend">Category</legend>
        {categories.map(category => {
          return (
            <Checkbox
              onChange={isChecked => {
                let newCheckedCategories = [...checkedCategories];
                if (isChecked) {
                  newCheckedCategories.push(category);
                } else {
                  newCheckedCategories = newCheckedCategories.filter(checkedCategory => {
                    return checkedCategory !== category;
                  });
                }
                setCheckedCategories(newCheckedCategories);
              }}
              checked={checkedCategories.includes(category)}
              key={category}
              labelText={category}
              id={"category-" + category}
            />
          );
        })}
        <legend className="playlist-table-legend">Tags</legend>
        {tags.sort().map(tag => {
          return (
            <Checkbox
              onChange={isChecked => {
                let newCheckedTags = [...checkedTags];
                if (isChecked) {
                  newCheckedTags.push(tag);
                } else {
                  newCheckedTags = newCheckedTags.filter(checkedTag => {
                    return checkedTag !== tag;
                  });
                }
                setCheckedTags(newCheckedTags);
              }}
              checked={checkedTags.includes(tag)}
              key={tag}
              labelText={tag}
              id={"tag-" + tag}
            />
          );
        })}
      </fieldset>
    </div>
  );
};

function getPlaylistCategories(allPlaylists: SpotifyPlaylistMetadata[]) {
  const categories: string[] = [];

  allPlaylists.forEach(playlist => {
    if (!categories.includes(playlist.category)) {
      categories.push(playlist.category);
    }
  });

  return categories;
}

function getPlaylistTags(allPlaylists: SpotifyPlaylistMetadata[]) {
  const tags: string[] = [];

  allPlaylists.forEach(playlist => {
    playlist.tags.forEach(tag => {
      console.log("tag", tag);

      if (!tags.includes(tag)) {
        tags.push(tag);
      }
    });
  });

  return tags;
}

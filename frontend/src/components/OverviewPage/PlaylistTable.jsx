import React from "react";
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

const PlaylistTable = ({ rows, headers }) => {
  const getRowDescription = rowId => {
    const row = rows.find(({ id }) => id === rowId);
    return row ? row.description : "";
  };
  return (
    <DataTable
      rows={rows}
      headers={headers}
      render={({
        rows,
        headers,
        getHeaderProps,
        getRowProps,
        getTableProps,
        onInputChange
      }) => (
        <TableContainer
          title="Carbon Repositories"
          description="A collection of public Carbon repositories."
        >
          <TableToolbar>
            <TableToolbarSearch expanded onChange={onInputChange} />
            <TableToolbarMenu iconDescription="Mot" renderIcon={Filter16}>
              {/* <TableToolbarAction>Massl</TableToolbarAction> */}
              <div style={{ padding: 10 }}>
                <fieldset>
                  <legend>Category</legend>
                  <Checkbox labelText="Motam" id="checkbox-label-1" />
                  <Checkbox labelText="Thomasina" id="checkbox-label-2" />
                  <legend>Tags</legend>
                  <Checkbox labelText="Motam" id="checkbox-label-3" />
                  <Checkbox labelText="Thomasina" id="checkbox-label-4" />
                </fieldset>
              </div>
            </TableToolbarMenu>
          </TableToolbar>
          <Table {...getTableProps()}>
            <TableHead>
              <TableRow>
                <TableExpandHeader />
                {headers.map(header => (
                  <TableHeader {...getHeaderProps({ header })}>
                    {header.header}
                  </TableHeader>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <React.Fragment key={row.id}>
                  <TableExpandRow {...getRowProps({ row })}>
                    {row.cells.map(cell => (
                      <TableCell key={cell.id}>{cell.value}</TableCell>
                    ))}
                  </TableExpandRow>
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

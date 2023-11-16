import React, { useMemo } from "react";
import { useTable, useSortBy } from "react-table";
import { COLUMNS } from "./columns";



import "./table.css";

import MOCK_DATA from "./MOCK_DATA.json";

const SortTable = () => {
//   const columns = useMemo(() => COLUMNS, []);
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  // Creating the table instance
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
  } = useTable({
    // columns: columns,
    // data: data

    // ES6 shorthand of above
    columns,
    data,
  }, useSortBy);

  return (
    <table>
      <thead {...getTableProps()}>
        {headerGroups.map((headerGroup) => {
          return (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => {
                return (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render("Header")}
                    <span> {column.isSorted ? (column.isSortedDesc  ? <span>&darr;</span> : <span>&uarr;</span>) : '' }</span>
                  </th>
                );
              })}
            </tr>
          );
        })}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
      <tfoot>
        {footerGroups.map((footerGroup) => {
          return (
            <tr {...footerGroup.getFooterGroupProps()}>
              {footerGroup.headers.map((column) => {
                return (
                  <td {...column.getFooterProps()}>
                    {column.render("Footer")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tfoot>
    </table>
  );
};

export default SortTable;

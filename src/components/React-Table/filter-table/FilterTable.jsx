import React, { useMemo } from "react";
import { useTable, useGlobalFilter, useFilters } from "react-table";
import { COLUMNS} from "../columns";

// import { GlobalFilter } from "./GlobalFilter";

import "./table1.css";

import MOCK_DATA from "../MOCK_DATA.json";
import { GlobalFilter } from "./GlobalFilter";
import { ColumnFilter } from "./ColumnFilter";

const FilterTable = () => {
  //   const columns = useMemo(() => COLUMNS, []);
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);
  const defaultColumn = useMemo(()=>{
    return {
      Filter: ColumnFilter
    }
  }, [])

  // Creating the table instance
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,  // fitering function
  } = useTable(
    {
      columns,
      data,
      defaultColumn
    },
    useFilters, 
    useGlobalFilter
  );

  const { globalFilter } = state; // fitering variable

  // console.log(globalFilter);

  return (
    <>
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <table {...getTableProps()}>
        <thead >
          {headerGroups.map((headerGroup) => {
            return (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => {
                  return (
                    <th {...column.getHeaderProps()}>
                      {column.render("Header")}
                      <div>{column.canFilter ? column.render('Filter') : null}</div>
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
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
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
    </>
  );
};

export default FilterTable;

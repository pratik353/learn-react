import React, { useMemo } from "react";
import { useTable, usePagination } from "react-table";
import { COLUMNS } from "../columns";

import "../table.css";

import MOCK_DATA from "../MOCK_DATA.json";

const Pagination = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    // footerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state,
    pageCount,
    gotoPage,
    setPageSize,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
      initialState: {pageIndex : 0 }
    },
    usePagination
  );

  const {pageIndex, pageSize} = state

  return (
    <>
    <table>
      <thead {...getTableProps()}>
        {headerGroups.map((headerGroup) => {
          return (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => {
                return (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                );
              })}
            </tr>
          );
        })}
      </thead>
      <tbody {...getTableBodyProps()}>
        {page.map((row) => {
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
    </table>
    <div>
        <span>
            Page {' '}
            <strong>{ pageIndex + 1 } of { pageOptions.length } {' '}</strong>
        </span>
        <select value={pageSize} onChange={e => setPageSize(Number(e.target.value))}>
          {
            [10, 25, 50].map((pageSize) =>{ return (
              
              <option key={pageSize} value={pageSize}>
                show {pageSize}
              </option>
            )
            }
            )
          }
        </select>
        <span> | go to page:{' '}</span>
        <input type="number" defaultValue= {pageIndex + 1}
        onChange={ e => {
             const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
             gotoPage(pageNumber)
        }
        }
        style={{width:'50px'}}
         />
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </button>{" "}        <button onClick={()=>previousPage()} disabled={!canPreviousPage}>Pravious</button>
        <button onClick={()=>nextPage()} disabled={!canNextPage}>Next</button>
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {">>"}
        </button>{" "}    </div>
    </>
  );
};

export default Pagination;

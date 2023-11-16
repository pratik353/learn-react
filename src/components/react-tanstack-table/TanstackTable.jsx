import React, { useMemo } from "react";
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel
} from "@tanstack/react-table";

import { DateTime } from "luxon";

import mData from "./MOCK_DATA.json";

const TanstackTable = () => {
  const data = useMemo(() => mData, []);
  // {"id":2,"first_name":"Kath","last_name":"Ruthven","email":"kruthven1@storify.com","gender":"Genderqueer","dob":"2023-03-11T11:18:37Z"},

  /** @type  import('@tanstack/react-table').ColumnDef<any>*/
  const columns = [
    { header: "ID", accessorKey: "id", footer: "ID" },

    // { header: "First Name", accessorKey: "first_name", footer: "First Name" },
    // { header: "Last Name", accessorKey: "last_name", footer: "Last Name" },

    // MERGE TWO COLUMNS
    // {header: "Name", accessorFn: row => `${row.first_name} ${row.last_name}`},

    // HEADER GROUPS WITH CHILD HEADERS
    {
      header: "Name",
      columns: [
        { header: "First", accessorKey: "first_name", footer: "First Name" },
        { header: "Last", accessorKey: "last_name", footer: "Last Name" },
      ],
    },

    { header: "Email", accessorKey: "email", footer: "Email" },
    { header: "Gender", accessorKey: "gender", footer: "Gender" },
    {
      header: "DOB",
      accessorKey: "dob",
      footer: "DOB",
      cell: (info) =>
        DateTime.fromISO(info.getValue()).toLocaleString(DateTime.DATETIME_MED),
    },
  ];

  const [sorting, setSorting] = React.useState([]);
  const [filtering, setFiltering] = React.useState('');

  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(), // need to add in options to access getRowModel() function and it is used to access row values and function
    getPaginationRowModel: getPaginationRowModel(), // used to access pagination functions
    getSortedRowModel:getSortedRowModel(), // used to access sorting functions
    getFilteredRowModel:getFilteredRowModel(), // used to access filtering functions
    state:{
        sorting: sorting,
        globalFilter: filtering
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering
  });

//   console.log(sorting);
//   console.log(table.getRowModel());

  return (
    <div>
      <div>TanstackTable</div>
      <div className="w3-container">
        <input type="text" value={filtering} onChange={e => setFiltering(e.target.value)}/>
        <table className="w3-table-all">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} onClick={header.column.getToggleSortingHandler()}>
                    {/*  header.isPlaceholder USED TO CHECK IF HEADER GROUP HAS CHILD COLUMN */}
                    {header.isPlaceholder
                      ? null
                      : <div>
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {
                            { asc:'🔼', desc:'🔽'}[header.column.getIsSorted() ?? null]
                        }
                      </div>
                    }
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
          {/* <tfoot>
            {table.getFooterGroups().map((footerGroup) => (
              <tr key={footerGroup.id}>
                {footerGroup.headers.map((footer) => (
                  <td key={footer.id}>
                    {footer.isPlaceholder ? null : flexRender(
                      footer.column.columnDef.header,
                      footer.getContext()
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tfoot> */}
        </table>
        <div style={{ display: "flex" }}>
          <button
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            First page
          </button>
          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous page
          </button>
          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next page
          </button>
          <button
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            Last page
          </button>
          <span>
            <span>Page</span>
            <strong>
              {table.getState().pagination.pageIndex + 1} of{" "}
              {table.getPageCount()}
            </strong>{" "}
          </span>
          <span>
            | Go to page:
            <input
              type="number"
              min={1}
              max={table.getPageCount()}
              value={table.getState().pagination.pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                table.setPageIndex(page);
              }}
            />
          </span>
          <select
            value={table.getState().pagination.pageSize}
            onChange={(e) => {
              table.setPageSize(Number(e.target.value));
            }}
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default TanstackTable;

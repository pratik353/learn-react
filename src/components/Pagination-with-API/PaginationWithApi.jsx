import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { ItemMeta } from "semantic-ui-react";

const PaginationWithApi = () => {
  const [items, setItems] = useState([]);
  const [pageCount, setPageCount] = useState(0)
  const [limit, setLimit] = useState(10)
  console.log(limit);

  // const limit = 10

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        `http://jsonplaceholder.typicode.com/posts/?_page=1&_limit=${limit}`
      );
      const data = await response.json();
      const total= response.headers.get('x-total-count')
      console.log(total);
      setPageCount(Math.ceil(total/limit))
      console.log(Math.ceil(total/limit));
      setItems(data);
      console.log(data);
    };
    getData();
  }, [limit]);

  const fetchData = async (currentPage) => {
    const response = await fetch(
      `http://jsonplaceholder.typicode.com/posts/?_page=${currentPage}&_limit=${limit}`
    );
    const data = await response.json();
    return data;
  };
   

  const handlePage = async (data) => {
    console.log(data.selected);
    let currentPage = data.selected + 1
    const pageData = await fetchData(currentPage);
    setItems(pageData)
  }

  return (
    <>
      <div>
        <table className="table table-hover">
          <thead>
            <tr>
              <td scope="col">{"User Id"}</td>
              <td scope="col">{"Id"}</td>
              <td scope="col">{"Title"}</td>
              {/* <td scope="col">{"Email"}</td> */}
            </tr>
          </thead>
          <tbody>
            {items.map((item) => {
              return (
                <tr key={item.id}>
                  <td> {item.userId}</td>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  {/* <td>{item.email}</td> */}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div>
        <ReactPaginate
          pageCount={pageCount}
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={"..."}
          marginPagesDisplayed={3}
          pageRangeDisplayed={3}
          onPageChange={handlePage}
          containerClassName={"pagination justify-content-center"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
          activeClassName={"active"}
        />
        <span>Page Size
          <input type="number" onChange={e => setLimit(e.target.value)}/>
        </span>
      </div>
    </>
  );
};

export default PaginationWithApi;

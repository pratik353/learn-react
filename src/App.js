import React from "react";
import "./App.css";

import ClickCounter from "./components/higherOrderComponent/ClickCounter";
import HoverCounter from "./components/higherOrderComponent/HoverCounter";
import ClickCounterTwo from "./components/renderProps-React/ClickCounterTwo";
import HoverCounterTwo from "./components/renderProps-React/HoverCounterTwo";
import Counter from "./components/renderProps-React/Counter";
import CreateRefs from "./components/Refs_in_React/CreateRefs";
import UseRef from "./components/Refs_in_React/useRef";
import FRIparent from "./components/Refs Forwarding/FRIparent";
import PortalDemo from "./components/Portal_In_React/PortalDemo";
import YouTubeForm from "./components/Formik-forms/YouTubeForm";
import Create from "./components/Axios In React/create/Create";
import BasicTable from "./components/React-Table/BasicTable";
import SortTable from "./components/React-Table/SortTable";
import FilterTable from "./components/React-Table/filter-table/FilterTable";
import Pagination from "./components/React-Table/pagination-table/Pagination";
import Search from "./components/React-Search-API/Search";
import PaginationWithApi from "./components/Pagination-with-API/PaginationWithApi";
import ImageFetch from "./components/react-image-fetch/ImageFetch";
import ImagePost from "./components/react-image-fetch/ImagePost";
import ReactSortApi from "./components/React-sort-API/ReactSortApi";
import CustomHooks from "./components/CustomHooks/component/CustomHooks";
import DataList from "./components/react-bootstrap-sort-pagination/DataList";
import UseSWR from "./components/useSWR-hook/UseSWR";
import UsersList from "./components/useQuery-in-react/UsersList";
import SortingTable from './components/sorting-function-react/SortingTable.jsx';
import CleanerFunction from "./components/Cleaner-function-useEffect/CleanerFunction";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import IframeDemo from "./components/iframe-demo/IframeDemo";
import UploadPDF from "./components/uploadPDF/UploadPDF";
import JSONToPDF from "./components/PDF-download/JsonToPdf";
import CustomGrid from "./components/css/CutomGrid";
import TanstackTable from "./components/react-tanstack-table/TanstackTable";
import ReactForm from "./components/react-forms/ReactForm";

const App = () => {
  
  fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response =>{
  console.log(response.headers.get('Content-Type'))
  return response.json()
})
.then(json => console.log(json))
  return (
  <div className="app">
    {/* <ClickCounter name='Pranay'/>
        <HoverCounter  name='pratik'/> */}

    {/* <User name={(isLoggedIN)=> isLoggedIN ? "Pratik" : "Geast"}/> */}
    {/* <User render={(isLoggedIN)=> isLoggedIN ? "Pratik" : "Geast"}/> */}

    {/* <Counter render={(count, increamentCounter) => <ClickCounterTwo count ={count} increamentCounter={increamentCounter} />}/>
        <Counter render={(count, increamentCounter) => <HoverCounterTwo count ={count} increamentCounter={increamentCounter}/>}/> */}
    {/* <Navbar /> */}
    {/* <Sidebar /> */}
    {/* <CreateRefs /> */}
    {/* <UseRef /> */}
    {/* <FRIparent /> */}
    {/* < PortalDemo /> */}
    {/* < YouTubeForm /> */}{/* Formik */}
    {/* < Create /> */}
    {/* <BasicTable /> */}
    {/* <SortTable /> */}
    {/* <FilterTable /> */}
    {/* <Pagination /> */}
    {/* <PaginationWithApi /> */}
    {/* <Search /> */}
    {/* <ReactSortApi /> */}
    {/* <ImagePost /> */}
    {/* <ImageFetch /> */}
    {/* <CustomHooks /> */}
    {/* <DataList /> */}
    {/* <UseSWR /> */}
    {/* <UsersList/> */}
    {/* <SortingTable /> */}
    {/* <CleanerFunction /> */}
    {/* <IframeDemo /> */}
    {/* <UploadPDF/> */}
    {/* <JSONToPDF/> */}
    {/* <div className="grid-container">
      <CustomGrid row={1} col={1} rowSpan={2} colSpan={1} />
      <CustomGrid row={3} col={2} rowSpan={3} colSpan={3} />
    </div> */}
    {/* <TanstackTable/> */}
    <ReactForm/>
  </div>)
  };

export default App;

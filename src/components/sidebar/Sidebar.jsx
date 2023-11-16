import React from "react";
import { useState } from "react";

import "./sidebar.css";
import logo from "../../img/logo/webscript.png";
import * as FaIcons from "react-icons/fa";
import * as ImIcons from "react-icons/im";
import { MENU_ITEMS } from "./menuOptions";
import MenuItem from "./MenuItem";

const Sidebar = () => {
  const [inactive, setInactive] = useState(false);
  return (
    <>
      <div className={`sidebar ${inactive ? "inactive" : ""}`}>
        <div className="top-section">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div
            className="toggle-menu-btn"
            onClick={() => setInactive(!inactive)}
          >
            <FaIcons.FaBars />
          </div>
        </div>
        <div className="search-controller">
          <div className="search-btn">
            <ImIcons.ImSearch />
          </div>
          <input type="text" placeholder="Search" />
        </div>
        <div className="divider"></div>
        <div className="main-menu">
          <ul>
            {MENU_ITEMS.map((item, i) => (
              <MenuItem 
              key={i}
              name={item.name}
              exact={item.exact}
              to={item.to}/>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

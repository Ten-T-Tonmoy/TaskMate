import React, { useState } from "react";
import { GoSidebarCollapse } from "react-icons/go";
import { GoSidebarExpand } from "react-icons/go";

/**
 * sideBar
 * mode
 * temporary mode ?
 */

const TopBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="flex drawer justify-between">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content p-2 ">
          {/* Bar contents */}
          <label
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            htmlFor="my-drawer"
            className=" 
          text-[1.1rem] hover:scale-105 cursor-pointer
          drawer-button"
          >
            {isOpen ? <GoSidebarExpand /> : <GoSidebarCollapse />}
          </label>
        </div>

        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            {/* Sidebar content here */}
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default TopBar;

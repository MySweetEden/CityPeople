import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import Chart from "./Chart";

type Props = {
  open: boolean;
  handelClick: () => void;
};
const Sidebar = ({ open, handelClick }: Props) => {
  return (
    <div
      id="drawer-navigation"
      className={`border-r border-gray-900 mt-16 z-40 h-full p-4 overflow-y-auto bg-white w-[40vw] dark:bg-gray-800 ${
        open ? "fixed" : "hidden"
      }`}
      aria-labelledby="drawer-navigation-label"
    >
      <h5
        id="drawer-navigation-label"
        className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
      >
        データ詳細
      </h5>
      <Chart />
      <button
        type="button"
        onClick={handelClick}
        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
      >
        <svg
          aria-hidden="true"
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
      <div className="py-4 overflow-y-auto"></div>
    </div>
  );
};

export default Sidebar;

import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Data from "../../assets/data/data_url_color.json";

import Chart from "./Chart";

type Props = {
  open: boolean;
  handelClick: () => void;
};
const Sidebar = ({ open, handelClick }: Props) => {
  let { city } = useParams();
  console.log(city);
  return (
    <div
      id="drawer-navigation"
      className={`border-r border-gray-900 mt-16 z-40 h-full p-4 overflow-y-auto bg-[#68B7F5]  w-[40vw] dark:bg-gray-800 ${
        open ? "fixed" : "hidden"
      }`}
    >
      <h5 id="drawer-navigation-label" className="my-4 text-2xl font-bold">
        都会マウント指数
        <br />
        <span className="pl-3 pt-2 text-5xl">{Data[city].dev}</span>
      </h5>
      <Chart city1={Data[city]} />
      <button
        type="button"
        onClick={handelClick}
        className="text-gray-600 bg-transparent hover:bg-gray-200 hover:border-transparent text-xl p-1.5 absolute top-2.5 right-2.5 inline-flex items-center"
      >
        <svg
          aria-hidden="true"
          className="w-6 h-6"
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

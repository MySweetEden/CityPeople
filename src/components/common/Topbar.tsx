import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import Chart from "./Chart";

type Props = {
  selectCity: [];
  handleReset: () => void;
};
const Topbar = ({ selectCity, handleReset }: Props) => {
  return (
    <div className="border-r-2 border-gray-900 pt-16 z-10  flex flex-col justify-between bg-[#68B7F5] w-[40vw] p-4 ">
      <h5 className="text-3xl font-semibold text-gray-900 my-10">
        マウントしたい都市を選択してください
        <div className="mx-auto bg-white border-2 border-gray-900 rounded-xl h-[40vh] mt-5 p-4">
          <div className="flex flex-col mx-auto pt-10">
            {selectCity.map((city, index) => (
              <Link
                to={`/detail/${city.key}`}
                className={`${
                  index == 0 ? "text-[#ff5eaf]" : "text-[#68B7F5]"
                } hover:text-[#3D3B61] text-4xl pb-10 text-center`}
              >
                {city.prefecture_name} : {city.city_name}
              </Link>
            ))}
          </div>
          {selectCity.length == 2 && (
            <div className="text-center">
              <Link
                to={`/compare`}
                state={{
                  city1: selectCity[0],
                  city2: selectCity[1],
                }}
                className="text-center p-4 font-bold border-2 border-gray-900 m-auto w-28"
              >
                対決
              </Link>
            </div>
          )}
        </div>
      </h5>
      {selectCity.length > 0 && (
        <div className="">
          <button
            className="border-2 border-gray-900 h-auto w-28 bg-white"
            onClick={handleReset}
          >
            リセット
          </button>
        </div>
      )}
    </div>
  );
};

export default Topbar;

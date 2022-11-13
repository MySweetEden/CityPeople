import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import Chart from "./Chart";

type Props = {
  selectCity: [];
};
const Topbar = ({ selectCity }: Props) => {
  return (
    <div className="border-r border-gray-900 mt-16 z-40 h-full bg-white w-[40vw] p-4">
      <h5 className="text-3xl font-semibold text-gray-500 my-4">
        マウントしたい都市を選択してください
      </h5>
      <div className="">
        {selectCity.map((city) => (
          <p className="text-4xl pb-2">
            {city.prefecture_name} : {city.city_name}
          </p>
        ))}
      </div>
      <div className="py-4 overflow-y-auto"></div>
    </div>
  );
};

export default Topbar;

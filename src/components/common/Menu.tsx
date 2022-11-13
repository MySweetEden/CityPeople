import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import Building from "../../assets/common/building01.png";
import HistorySVG from "../../assets/menu/favorite.svg";
import MainSVG from "../../assets/menu/main.svg";
import Data from "../../assets/data/data_url_color.json";

const Menu = () => {
  const [path, setPath] = useState<string>("");
  const { pathname } = useLocation();

  useEffect(() => {
    setPath(pathname);
  }, [pathname]);
  return (
    <div className="bg-[#68B7F5] w-full fixed top-0 h-16 items-center z-20">
      <div className="flex flex-start border-b-2 border-gray-900">
        <div className="flex h-full">
          <Link
            to="/"
            className="py-2 inline-flex items-center justify-center text-center w-52 border-r border-gray-900 bg-[#F9ED52]"
          >
            <div className="flex justify-center px-2">
              <p className="font-bold text-xl">都会マウント</p>
            </div>
          </Link>
          <Link
            to="/detail/test"
            className={`${
              path.indexOf("detail") !== -1 ? "selectBtn" : "button"
            } leading-[4rem] py-2 inline-flex items-center justify-center text-center w-52 border-r border-gray-900`}
          >
            <div className="flex flex-col justify-center px-2">
              <p className=" font-bold text-xl">Detail</p>
              <p className=" text-sx">詳細</p>
            </div>
          </Link>
          <Link
            to="/compare"
            className={`${
              path == "/compare" ? "selectBtn" : "button"
            } leading-[4rem] py-2 inline-flex items-center justify-center text-center w-52 border-r border-gray-900`}
          >
            <div className="flex flex-col justify-center px-2">
              <p className="font-bold text-xl">Compare</p>
              <p className="text-sx">比較</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;

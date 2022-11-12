import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import Building from "../../assets/common/building01.png";
import HistorySVG from "../../assets/menu/favorite.svg";
import MainSVG from "../../assets/menu/main.svg";

const Menu = () => {
  const [path, setPath] = useState<string>("");
  const { pathname } = useLocation();
  const isInfo = () => {
    return path === "/info";
  };
  const isMain = () => {
    return path === "/";
  };
  const isHistory = () => {
    return path === "/history";
  };

  useEffect(() => {
    setPath(pathname);
  }, [pathname]);
  return (
    <div className="bg-white w-full fixed top-0 h-16 items-center z-10">
      <div className="flex flex-start border border-gray-900">
        <div className="flex h-full -mb-[1px]">
          <Link
            to="/"
            className="py-2 inline-flex items-center justify-center text-center w-52 border-r border-gray-900"
          >
            <div className="flex justify-center px-2">
              <p className="text-gray-800 font-bold text-xl">都会マウント</p>
            </div>
          </Link>
          <Link
            to="/"
            className="py-2 inline-flex items-center justify-center text-center w-52 border-r border-gray-900"
          >
            <div className="flex flex-col justify-center px-2">
              <p className="text-gray-800 font-bold text-xl">Detail</p>
              <p className="text-gray-800 text-sx">詳細</p>
            </div>
          </Link>
          <Link
            to="/"
            className="py-2 inline-flex items-center justify-center text-center w-52 border-r border-gray-900"
          >
            <div className="flex flex-col justify-center px-2">
              <p className="text-gray-800 font-bold text-xl">Compare</p>
              <p className="text-gray-800 text-sx">比較</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;

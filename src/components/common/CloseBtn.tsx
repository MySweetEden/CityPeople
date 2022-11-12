import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import Arrow from "../../assets/common/arrow_right.png";
import HistorySVG from "../../assets/menu/favorite.svg";
import MainSVG from "../../assets/menu/main.svg";

type Props = {
  handelClick: () => void;
};
const Sidebar = ({ handelClick }: Props) => {
  return (
    <div className="border-r border-b border-gray-900 mt-16 z-40 h-auto fixed">
      <button
        type="button"
        onClick={handelClick}
        className="hover:border-transparent"
      >
        <img src={Arrow} className="w-10 h-10" />
      </button>
    </div>
  );
};

export default Sidebar;

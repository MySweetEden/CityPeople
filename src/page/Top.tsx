import { useState } from "react";
import { Link } from "react-router-dom";

import Menu from "../components/common/Menu";
import Topbar from "../components/common/Topbar";
import CloseBtn from "../components/common/CloseBtn";
import Map from "../components/common/Map";

function Top() {
  const [open, setOpen] = useState<boolean>(true);
  const [selectCity, setSelectCity] = useState<[]>([]);

  return (
    <div className="Top">
      <Menu />
      <div className="flex">
        <Topbar handleReset={() => setSelectCity([])} selectCity={selectCity} />
        <main className="h-full flex justify-center">
          <Map selectCity={selectCity} setSelectCity={setSelectCity} />
        </main>
      </div>
    </div>
  );
}

export default Top;

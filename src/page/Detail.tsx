import { useContext } from "react";
import { UserData } from "../App";
import Menu from "../components/common/Menu";
import { nyosan } from "../config/common";

import { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/common/Sidebar";
import CloseBtn from "../components/common/CloseBtn";

function Detail() {
  const { item } = useContext(UserData);
  const n = item.find((value) => {
    return value.isRed;
  });
  const [open, setOpen] = useState<boolean>(true);

  return (
    <div className="Detail">
      <Menu />
      <div className="flex">
        {open ? (
          <Sidebar open={open} handelClick={() => setOpen(!open)} />
        ) : (
          <CloseBtn handelClick={() => setOpen(!open)} />
        )}
        <main className="h-full flex justify-center pb-28">
          <iframe
            id="inlineFrameExample"
            className="ml-[40vw]"
            title="Inline Frame Example"
            width="1000"
            height="1000"
            //src="https://plateauview.mlit.go.jp/#start=%7B%22version%22%3A%228.0.0%22%2C%22initSources%22%3A%5B%7B%22stratum%22%3A%22user%22%2C%22models%22%3A%7B%22%2F%2FPLATEAU+%E3%83%87%E3%83%BC%E3%82%BF%E3%82%BB%E3%83%83%E3%83%88%2F%E6%9D%B1%E4%BA%AC%E9%83%BD%22%3A%7B%22isOpen%22%3Atrue%2C%22knownContainerUniqueIds%22%3A%5B%22%2F%2FPLATEAU+%E3%83%87%E3%83%BC%E3%82%BF%E3%82%BB%E3%83%83%E3%83%88%22%5D%2C%22type%22%3A%22group%22%7D%2C%22%2F%2FPLATEAU+%E3%83%87%E3%83%BC%E3%82%BF%E3%82%BB%E3%83%83%E3%83%88%2F%E6%9D%B1%E4%BA%AC%E9%83%BD%2F%E6%9D%B1%E4%BA%AC%E9%83%BD23%E5%8C%BA%22%3A%7B%22isOpen%22%3Atrue%2C%22knownContainerUniqueIds%22%3A%5B%22%2F%2FPLATEAU+%E3%83%87%E3%83%BC%E3%82%BF%E3%82%BB%E3%83%83%E3%83%88%2F%E6%9D%B1%E4%BA%AC%E9%83%BD%22%5D%2C%22type%22%3A%22group%22%7D%2C%22%2F%2FPLATEAU+%E3%83%87%E3%83%BC%E3%82%BF%E3%82%BB%E3%83%83%E3%83%88%2F%E6%9D%B1%E4%BA%AC%E9%83%BD%2F%E6%9D%B1%E4%BA%AC%E9%83%BD23%E5%8C%BA%2F%E5%8D%83%E4%BB%A3%E7%94%B0%E5%8C%BA%22%3A%7B%22isOpen%22%3Atrue%2C%22knownContainerUniqueIds%22%3A%5B%22%2F%2FPLATEAU+%E3%83%87%E3%83%BC%E3%82%BF%E3%82%BB%E3%83%83%E3%83%88%2F%E6%9D%B1%E4%BA%AC%E9%83%BD%2F%E6%9D%B1%E4%BA%AC%E9%83%BD23%E5%8C%BA%22%5D%2C%22type%22%3A%22group%22%7D%2C%22%2F%2FPLATEAU+%E3%83%87%E3%83%BC%E3%82%BF%E3%82%BB%E3%83%83%E3%83%88%2F%E6%9D%B1%E4%BA%AC%E9%83%BD%2F%E6%9D%B1%E4%BA%AC%E9%83%BD23%E5%8C%BA%2F%E5%8D%83%E4%BB%A3%E7%94%B0%E5%8C%BA%2F%E5%BB%BA%E7%89%A9%E3%83%A2%E3%83%87%E3%83%AB%EF%BC%88%E5%8D%83%E4%BB%A3%E7%94%B0%E5%8C%BA%EF%BC%89%22%3A%7B%22highlightColor%22%3A%22%23D54A4A%22%2C%22style%22%3A%7B%22color%22%3A%7B%22conditions%22%3A%5B%5B%22true%22%2C%22color%28%27%23FFFFFF%27%2C1+%29%22%5D%5D%7D%7D%2C%22knownContainerUniqueIds%22%3A%5B%22%2F%2FPLATEAU+%E3%83%87%E3%83%BC%E3%82%BF%E3%82%BB%E3%83%83%E3%83%88%2F%E6%9D%B1%E4%BA%AC%E9%83%BD%2F%E6%9D%B1%E4%BA%AC%E9%83%BD23%E5%8C%BA%2F%E5%8D%83%E4%BB%A3%E7%94%B0%E5%8C%BA%22%5D%2C%22type%22%3A%223d-tiles%22%7D%2C%22%2F%22%3A%7B%22type%22%3A%22group%22%7D%2C%22%2F%2FPLATEAU+%E3%83%87%E3%83%BC%E3%82%BF%E3%82%BB%E3%83%83%E3%83%88%22%3A%7B%22knownContainerUniqueIds%22%3A%5B%22%2F%22%5D%2C%22type%22%3A%22group%22%7D%7D%2C%22workbench%22%3A%5B%22%2F%2FPLATEAU+%E3%83%87%E3%83%BC%E3%82%BF%E3%82%BB%E3%83%83%E3%83%88%2F%E6%9D%B1%E4%BA%AC%E9%83%BD%2F%E6%9D%B1%E4%BA%AC%E9%83%BD23%E5%8C%BA%2F%E5%8D%83%E4%BB%A3%E7%94%B0%E5%8C%BA%2F%E5%BB%BA%E7%89%A9%E3%83%A2%E3%83%87%E3%83%AB%EF%BC%88%E5%8D%83%E4%BB%A3%E7%94%B0%E5%8C%BA%EF%BC%89%22%5D%2C%22timeline%22%3A%5B%5D%2C%22initialCamera%22%3A%7B%22west%22%3A139.76092209699127%2C%22south%22%3A35.67998558640549%2C%22east%22%3A139.77399255694797%2C%22north%22%3A35.68705585724687%2C%22position%22%3A%7B%22x%22%3A-3960340.498135118%2C%22y%22%3A3350562.307544864%2C%22z%22%3A3699359.127038709%7D%2C%22direction%22%3A%7B%22x%22%3A0.7260889002775189%2C%22y%22%3A-0.572830779763444%2C%22z%22%3A0.3803416972268329%7D%2C%22up%22%3A%7B%22x%22%3A-0.2780625614119034%2C%22y%22%3A0.26127947255060713%2C%22z%22%3A0.9243453084019674%7D%7D%2C%22homeCamera%22%3A%7B%22west%22%3A139.63595%2C%22south%22%3A35.53022%2C%22east%22%3A139.95451%2C%22north%22%3A35.81489%7D%2C%22baseMaps%22%3A%7B%22defaultBaseMapId%22%3A%22%2Fbasemap%2F%2F%E5%85%A8%E5%9B%BD%E6%9C%80%E6%96%B0%E5%86%99%E7%9C%9F+%28%E3%82%B7%E3%83%BC%E3%83%A0%E3%83%AC%E3%82%B9%29%22%7D%2C%22viewerMode%22%3A%223d%22%2C%22currentTime%22%3A%7B%22dayNumber%22%3A2459895%2C%22secondsOfDay%22%3A73218.407%7D%2C%22showSplitter%22%3Afalse%2C%22splitPosition%22%3A0.5%2C%22stories%22%3A%5B%5D%7D%5D%7D"
          ></iframe>
        </main>
      </div>
    </div>
  );
}

export default Detail;

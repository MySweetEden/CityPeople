import { useContext } from "react";
import { UserData } from "../App";
import Menu from "../components/common/Menu";
import { nyosan } from "../config/common";
import City1Png from "../assets/compare/city1.png";
import City2Png from "../assets/compare/city2.png";
import SyutyuPng from "../assets/compare/syutyu.png";
import Data from "../assets/data/data_url_color.json";
import { useLocation } from "react-router-dom";
import AnimatedNumber from "react-animated-number";
import Chart from "../components/common/Chart";

interface State {
  city1: any;
  city2: any;
}

function Compare() {
  const { item } = useContext(UserData);
  const n = item.find((value) => {
    return value.isRed;
  });
  const location = useLocation();
  const { city1, city2 } = location.state as State;

  return (
    <div className="Compare  bg-[#F9ED52]">
      <Menu />
      <main className="h-full mt-[3rem] bg-[#F9ED52]">
        <div className="flex px-5 pt-5 pb-[20rem]">
          <div className="w-2/3 m-auto">
            <h1 className="text-center pt-5 text-4xl font-bold text-gray-900">
              勝つのはどっちだ！？
            </h1>
            <div className="flex flex-col">
              <div className="fadeInLeft relative text-right w-2/3 m-auto pl-5 text-white my-10">
                <img src={City1Png} />
                <span className="absolute text-4xl font-bold  text-white top-[15%] left-[20%]">
                  {city1.prefecture_name}
                </span>
                <br />
                <span className="absolute text-[4rem] font-bold  text-white top-[30%] left-[18%]">
                  {city1.city_name}
                </span>
                <div className="absolute text-[4rem] font-bold  text-white top-[8%] left-[52%] text-center">
                  <p className="text-xl">都市マウント指数</p>
                  <AnimatedNumber
                    component="text"
                    value={city1.dev}
                    style={{
                      transition: "0.8s ease-out",
                      fontSize: 80,
                      transitionProperty: "background-color, color, opacity",
                    }}
                    duration={2000}
                    stepPrecision={1}
                  />
                </div>
                {/* 偏差値が高かったら */}
                {city1.dev > city2.dev && (
                  <img
                    className="showSYUTYU absolute w-1/2 top-0 left-[37%] text-center"
                    src={SyutyuPng}
                  />
                )}
              </div>
              <div className="font-bold text-4xl text-center mb-10">VS.</div>
              <div className="fadeInRight relative text-right w-2/3 m-auto text-white">
                <img src={City2Png} height="200px" />
                <span className="absolute text-4xl font-bold  text-white top-[15%] left-[20%]">
                  {city2.prefecture_name}
                </span>
                <br />
                <span className="absolute text-[4rem] font-bold  text-white top-[30%] left-[18%]">
                  {city2.city_name}
                </span>
                <div className="absolute text-[4rem] font-bold  text-white top-[8%] left-[52%] text-center">
                  <p className="text-xl">都市マウント指数</p>
                  <AnimatedNumber
                    component="text"
                    value={city2.dev}
                    style={{
                      transition: "0.8s ease-out",
                      fontSize: 80,
                      transitionProperty: "background-color, color, opacity",
                    }}
                    duration={2500}
                    stepPrecision={1}
                  />
                </div>
                {/* 偏差値が高かったら */}
                {city2.dev > city1.dev && (
                  <img
                    className="showSYUTYU absolute w-1/2 top-0 left-[37%] text-center"
                    src={SyutyuPng}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="w-1/3 mt-10 mx-auto text-center">
            <h2 className="text-center pt-5 text-4xl font-bold text-gray-900">
              都会マウントレーダー
            </h2>
            <Chart city1={city1} city2={city2} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Compare;

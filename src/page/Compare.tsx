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

interface State {
  city1: string;
  city2: string;
}

function Compare() {
  const { item } = useContext(UserData);
  const n = item.find((value) => {
    return value.isRed;
  });
  const location = useLocation();
  const { city1, city2 } = location.state as State;

  return (
    <div className="Compare">
      <Menu />
      <main className="h-full mt-[4rem] bg-[#F9ED52]">
        <h1 className="text-center pt-5 text-4xl font-bold text-gray-900">
          勝つのはどっちだ！？
        </h1>
        <div className="flex flex-col">
          <div className="fadeInLeft relative text-right w-1/2 m-auto pl-5 text-white my-10">
            <img src={City1Png} />
            <span className="absolute text-4xl font-bold  text-white top-[15%] left-[20%]">
              宮城県
            </span>
            <br />
            <span className="absolute text-[4rem] font-bold  text-white top-[30%] left-[18%]">
              仙台市
            </span>
            <div className="absolute text-[4rem] font-bold  text-white top-[8%] left-[52%] text-center">
              <p className="text-xl">都市マウント指数</p>
              <AnimatedNumber
                component="text"
                value={45.3}
                style={{
                  transition: "0.8s ease-out",
                  fontSize: 80,
                  transitionProperty: "background-color, color, opacity",
                }}
                frameStyle={(perc) =>
                  perc === 500 ? {} : { backgroundColor: "#FF5EAF" }
                }
                duration={2000}
                stepPrecision={1}
              />
            </div>
            {/* 偏差値が高かったら */}
            {true && (
              <img
                className="showSYUTYU absolute w-1/2 top-0 left-[37%] text-center"
                src={SyutyuPng}
              />
            )}
          </div>
          <div className="font-bold text-4xl text-center mb-10">VS.</div>
          <div className="fadeInRight relative text-right w-1/2 m-auto pl-5 text-white">
            <img src={City2Png} />
            <span className="absolute text-4xl font-bold  text-white top-[15%] left-[20%]">
              宮城県
            </span>
            <br />
            <span className="absolute text-[4rem] font-bold  text-white top-[30%] left-[18%]">
              仙台市
            </span>
            <div className="absolute text-[4rem] font-bold  text-white top-[8%] left-[52%] text-center">
              <p className="text-xl">都市マウント指数</p>
              <AnimatedNumber
                component="text"
                value={45.3}
                style={{
                  transition: "0.8s ease-out",
                  fontSize: 80,
                  transitionProperty: "background-color, color, opacity",
                }}
                frameStyle={(perc) =>
                  perc === 500 ? {} : { backgroundColor: "#68B7F5" }
                }
                duration={2500}
                stepPrecision={1}
              />
            </div>
            {/* 偏差値が高かったら */}
            {true && (
              <img
                className="showSYUTYU absolute w-1/2 top-0 left-[37%] text-center"
                src={SyutyuPng}
              />
            )}
          </div>
        </div>

        <div className="p-8 text-center"></div>
        <div className="w-[94%] mx-auto"></div>
      </main>
    </div>
  );
}

export default Compare;

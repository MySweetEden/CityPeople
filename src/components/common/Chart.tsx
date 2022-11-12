import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import Arrow from "../../assets/common/arrow_right.png";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

type Props = {
  // データ
};

const Chart = (cityData: any) => {
  let jsonCityData = cityData['cityData'];

  const data = {
    labels: ["建築物圧迫感", "商業施設比率", "道路比率"],
    datasets: [
      {
        label: "# of Votes",
        data: [jsonCityData['height'], jsonCityData['commerce'], jsonCityData['street']],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="">
      <h2>都会マウント指数{Math.round(jsonCityData['dev']*100)/100}</h2>
      <Radar data={data} />
    </div>
  );
};

export default Chart;

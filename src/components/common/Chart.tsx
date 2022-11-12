import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Data from "../../assets/data/list.json";

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

const Chart = () => {
  const item1 = "aichi";
  const item2 = "chiba";
  const data = {
    labels: ["商業施設", "建築物の重み平均", "道路面積"],
    datasets: [
      {
        label: Data[item1].city_name,
        data: [Data[item1].commerce, Data[item1].height, Data[item1].street],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
      {
        label: Data[item2].city_name,
        data: [Data[item2].commerce, Data[item2].height, Data[item2].street],
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, q)",
        borderWidth: 1,
      },
    ],
    options: {
      scales: {
        ticks: {
          beginAtZero: true,
        },
      },
    },
  };
  return (
    <div className="">
      <h5>都会マウント指数</h5>
      <Radar data={data} />
    </div>
  );
};

export default Chart;

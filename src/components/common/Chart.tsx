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

const Chart = () => {
  const data = {
    labels: ["Thing 1", "Thing 2", "Thing 3"],
    datasets: [
      {
        label: "# of Votes",
        data: [2, 3, 3],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="">
      <h5>都会マウント指数</h5>
      <Radar data={data} />
    </div>
  );
};

export default Chart;

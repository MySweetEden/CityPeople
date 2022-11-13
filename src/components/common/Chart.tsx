import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Data from "../../assets/data/data_url_color.json";

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
  city1: any;
  city2?: any;
};

const Chart = ({ city1, city2 }: Props) => {
  let datasets = [
    {
      label: city1.city_name,
      data: [city1.commerce, city1.height, city1.street],
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 2,
    },
  ];
  if (city2) {
    datasets = [
      {
        label: city1.city_name,
        data: [city1.commerce, city1.height, city1.street],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 2,
      },
      {
        label: city2.city_name,
        data: [city2.commerce, city2.height, city2.street],
        backgroundColor: "rgba(30, 144, 255, 0.2)",
        borderColor: "rgba(30, 144, 255, 1)",
        borderWidth: 2,
      },
    ];
  }
  const data = {
    labels: ["圧迫感", "建物の量", "お店の量"],
    datasets: datasets,
    options: {
      scales: {
        ticks: {
          beginAtZero: true,
        },
      },
    },
  };
  return (
    <div className="border-2 bg-white border-gray-900 rounded-xl pt-16">
      <Radar data={data} />
    </div>
  );
};

export default Chart;

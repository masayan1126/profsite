import React from "react";
import { Doughnut } from "react-chartjs-2";

const data = {
  labels: [
    "JS(Vue、React、Next、TS)",
    "PHP(Laravel)",
    "CSS",
    "Bootstrap",
    "HTML",
    "Firebase",
    "AWS(EC2、VPC、Route53、S3)",
    "Git",
    "API",
  ],
  datasets: [
    {
      data: [30, 20, 10, 10, 10, 5, 5, 7, 3],
      backgroundColor: [
        "#d7c447",
        "#9b7cb6",
        "#0078ba",
        "#522886",
        "#e5171f",
        "#ff9500",
        "#ee7b1a",
        "black",
        "",
      ],
      hoverBackgroundColor: [
        "#d7c447",
        "#9b7cb6",
        "#0078ba",
        "#522886",
        "#e5171f",
        "#ff9500",
        "#ee7b1a",
        "black",
        "",
      ],
    },
  ],
};

const options = {
  maintainAspectRatio: true,
  responsive: true,
};

export default (skillChart) => (
  <div>
    <Doughnut data={data} options={options} width={350} height={300} />
  </div>
);

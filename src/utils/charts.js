// src/utils/charts.js
import Chart from "chart.js/auto";

export const createDoughnutChart = (ctx) => {
  return new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["High", "Medium", "Low"],
      datasets: [
        {
          data: [45, 35, 20],
          backgroundColor: ["#4e79a7", "#f28e2b", "#e15759"],
          hoverOffset: 20,
        },
      ],
    },
    options: {
      cutout: "70%",
      plugins: {
        legend: { position: "bottom" },
      },
    },
  });
};

export const createLineChart = (ctx) => {
  return new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6", "Week 7"],
      datasets: [
        {
          label: "Motivation Level",
          data: [30, 40, 35, 50, 45, 73, 80],
          borderColor: "#4e79a7",
          backgroundColor: "rgba(78, 121, 167, 0.2)",
          borderWidth: 2,
          pointRadius: 4,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
      },
    },
  });
};
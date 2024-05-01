import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BakeryChart = ({ dataKey, data }) => {
  const chartConfiguration = {
    labels: ['Flour', 'Butter', 'Sugar', 'Eggs'],
    datasets: [
      {
        label: dataKey,
        data: data,
        backgroundColor: [
          'rgba(234,216,171,255)',
          'rgba(243,192,96,255)',
          'rgba(201,201,201,255)',
          'rgba(249,221,112,255)'
        ],
        borderColor: [
          'rgba(234,216,171,1)',
          'rgba(243,192,96,1)',
          'rgba(201,201,201,1)',
          'rgba(249,221,112,1)'
        ],
        borderWidth: 5
      }
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        suggestedMin: 0,
        suggestedMax: 30
      }
    },
    maintainAspectRatio: false
  };

return (
  <div className="chart-container">
    <Bar data={chartConfiguration} options={options} />
  </div>
);
};

export default BakeryChart;

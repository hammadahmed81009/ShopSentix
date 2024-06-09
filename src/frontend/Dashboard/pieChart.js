import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ positive, negative, neutral }) => {
  const data = {
    labels: ['Positive', 'Negative', 'Neutral'],
    datasets: [
      {
        data: [positive, negative, neutral],
        backgroundColor: ['#4caf50', '#f44336', '#ffeb3b'],
        hoverBackgroundColor: ['#388e3c', '#d32f2f', '#fbc02d'],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            const label = tooltipItem.label || '';
            const value = tooltipItem.raw;
            return `${label}: ${value}`;
          },
        },
      },
    },
  };

  return (
    <div className="h-64 w-64">
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;

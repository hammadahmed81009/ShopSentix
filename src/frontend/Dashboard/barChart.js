import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const BarChart = ({ positive, negative, neutral }) => {
  const data = {
    labels: ['Positive', 'Negative', 'Neutral'],
    datasets: [
      {
        label: 'Values',
        data: [positive, negative, neutral],
        backgroundColor: ['#4caf50', '#f44336', '#ffeb3b'],
        borderColor: ['#388e3c', '#d32f2f', '#fbc02d'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Bar Chart Example',
      },
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: 'Categories',
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'Values',
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="h-64 w-full">
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;

import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = ({ total, highlighted }) => {
  const data = {
    labels: ['Highlighted', 'Remaining'],
    datasets: [
      {
        data: [highlighted, total - highlighted],
        backgroundColor: ['#6a0dad', '#e0e0e0'],
        hoverBackgroundColor: ['#6a0dad', '#e0e0e0'],
      },
    ],
  };

  const options = {
    cutout: '70%',
  };

  return (
    <div className="h-32 w-32">
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DonutChart;

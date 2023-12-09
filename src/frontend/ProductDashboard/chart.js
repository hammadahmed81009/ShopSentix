import React from 'react';
import { Line } from 'react-chartjs-2';

const options = {
  scales: {
    x: {
      type: 'linear',
      position: 'bottom',
    },
    y: {
      type: 'linear', // Fix: Use 'linear' instead of 'type: 'linear''
      beginAtZero: true,
    },
  },
  plugins: {
    legend: {
      display: true,
    },
    title: {
      display: true,
      text: 'Website Visits (+43% than last year)',
    },
  },
  responsive: true,
  maintainAspectRatio: false,
};

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      type: 'line',
      label: 'Team A',
      data: [65, 59, 80, 81, 56, 55, 40],
      borderColor: 'rgb(54, 162, 235)',
      backgroundColor: 'rgba(54, 162, 235, 0.5)',
    },
    {
      type: 'line',
      label: 'Team B',
      data: [45, 49, 60, 70, 46, 55, 30],
      borderColor: 'rgb(255, 205, 86)',
      backgroundColor: 'rgba(255, 205, 86, 0.5)',
    },
    {
      type: 'bar',
      label: 'Team C',
      data: [28, 48, 40, 19, 86, 27, 90],
      borderColor: 'rgb(75, 192, 192)',
      backgroundColor: 'rgba(75, 192, 192, 0.5)',
    },
  ],
};

const Chart = () => {
  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
}

export default Chart;
